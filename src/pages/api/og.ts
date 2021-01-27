import type { NextApiRequest, NextApiResponse } from 'next'
import got from 'got'

// --

interface FigmaAPIResult {
  err: null | string
  images: {
    [key: string]: string
  }
}

// Example:
// https://www.figma.com/file/LCzKwbepwQ5MaPwDJ8FCUsRo/francoisbest.com?node-id=301%3A7
const FIGMA_REGEX = /^https:\/\/www\.figma\.com\/file\/([\w]*).+node-id=([\w%:]+)(\&.*)?$/

export async function processFigmaUrl(figmaURL: string) {
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

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const url = req.query.url as string
  try {
    const result = await processFigmaUrl(url)
    res.redirect(result)
  } catch (error) {
    res.status(400).json({
      error: error.message,
    })
  }
}
