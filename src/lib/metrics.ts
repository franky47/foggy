import type { IncomingHttpHeaders } from 'http'
// import IORedis from 'ioredis'

export interface Metrics {
  duration: number
  headers?: IncomingHttpHeaders
  figmaFile: string
}

export function collectMetrics(metrics: Metrics) {
  console.dir(metrics)
}
