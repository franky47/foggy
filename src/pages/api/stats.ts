import type { NextApiRequest, NextApiResponse } from 'next'
import { getStats } from 'src/server/redis'

export default async function getStatsEndpoint(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const stats = await getStats()
  res.json(stats)
}
