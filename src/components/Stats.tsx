import {
  BoxProps,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import React from 'react'
import { fetchJSON } from 'src/client/fetch'
import { Stats as RedisStats } from 'src/server/redis'
import useSWR from 'swr'

export interface StatsProps extends BoxProps {}

export const Stats: React.FC<StatsProps> = ({ ...props }) => {
  const { data } = useSWR<RedisStats>('stats', fetchJSON, {
    // Only fetch once, no need for real-time stats
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
  return (
    <StatGroup textAlign="center" {...props}>
      <Stat>
        <StatNumber>{data?.hitCount ?? '--'}</StatNumber>
        <StatLabel>Images Generated</StatLabel>
      </Stat>
      <Stat>
        <StatNumber>{data?.files ?? '--'}</StatNumber>
        <StatLabel>Files Processed</StatLabel>
      </Stat>
    </StatGroup>
  )
}
