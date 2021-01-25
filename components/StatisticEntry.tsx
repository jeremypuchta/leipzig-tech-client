import React from 'react'

import Counter from './Counter'
import { Stat } from './Statistics'

export default function StatisticEntry({
  statistic,
}: {
  statistic: Stat
}): JSX.Element {
  return (
    <div className="flex flex-col h-full place-content-around">
      <div className="flex flex-col">
        <div className="text-blue-500 font-bold text-6xl mb-3">
          <Counter value={statistic.value} duration={statistic.duration} />
        </div>
        <div className="text-gray-400 text-2xl">{statistic.title}</div>
      </div>
    </div>
  )
}
