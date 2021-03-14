import Redis from 'ioredis'

export interface APICallMeta {
  agent: string
  file: string
}

export interface Stats {
  hitCount: number
  files: number
}

export async function pushStatsToRedis(meta: APICallMeta) {
  if (!process.env.REDIS_URI) {
    return
  }
  const redis = new Redis(process.env.REDIS_URI)
  await Promise.all([
    redis.incr('foggy:api:hits'),
    redis.zincrby('foggy:api:agents', 1, meta.agent),
    redis.zincrby('foggy:api:files', 1, meta.file),
  ])
}

export async function getStats(): Promise<Stats> {
  const redis = new Redis(process.env.REDIS_URI)
  const [hits, files] = await Promise.all([
    redis.get('foggy:api:hits'),
    redis.zcount('foggy:api:files', 0, '+inf'),
  ])
  return {
    hitCount: parseInt(hits ?? '0'),
    files,
  }
}
