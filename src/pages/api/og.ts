import * as Sentry from '@sentry/node'
import '@sentry/tracing'
import got from 'got'
import type { NextApiRequest, NextApiResponse } from 'next'
import { performance } from 'perf_hooks'
import { pushStatsToRedis } from 'src/server/redis'

// --

interface FigmaAPIResult {
  err: null | string
  images: {
    [key: string]: string | null
  }
}

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
})

// Example:
// https://www.figma.com/file/LCzKwbepwQ5MaPwDJ8FCUsRo/francoisbest.com?node-id=301%3A7
const FIGMA_REGEX =
  /^https:\/\/www\.figma\.com\/file\/([\w]*).+node-id=([\w%:]+)(\&.*)?$/

export async function processFigmaURL(figmaURL: string) {
  const match = figmaURL.match(FIGMA_REGEX)
  if (!match) {
    throw new Error('Invalid Figma URL')
  }
  const fileID = match[1]
  const frameID = match[2]
  const apiURL = `https://api.figma.com/v1/images/${fileID}?ids=${frameID}`
  const token = process.env.FIGMA_ACCESS_TOKEN
  const body: FigmaAPIResult = await got(apiURL, {
    headers: {
      'X-FIGMA-TOKEN': token,
    },
  }).json()
  if (body.err !== null) {
    throw new Error(body.err)
  }
  return body.images[frameID]
}

// --

export default async function generateOpenGraphImage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tick = performance.now()
  const url = req.query.url as string
  const tx = Sentry.startTransaction({
    op: 'processFigmaURL',
    name: 'Process Figma URL',
  })
  try {
    const result = await processFigmaURL(url)
    if (!result) {
      throw new Error('Figma failed to render the image')
    }
    res.redirect(result)
    await pushStatsToRedis({
      agent: req.headers['user-agent'] ?? 'Unknown',
      file: url,
    })
  } catch (error) {
    Sentry.setExtras({
      figmaURL: url,
    })
    Sentry.captureException(error)
    if (!res.headersSent) {
      res.status(400).json({
        error: error instanceof Error ? error.message : String(error),
      })
    }
  } finally {
    const tock = performance.now()
    tx.data = {
      ...tx.data,
      duration: tock - tick,
      agent: req.headers['user-agent'],
      referer: req.headers.referer,
      origin: req.headers.origin,
      figmaFile: url,
    }
    tx.finish()
  }
}
