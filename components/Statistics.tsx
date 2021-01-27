import React, { useEffect, useState } from 'react'
import { CompanyStatistic } from '../models/Statistic.model'
import StatisticEntry from './StatisticEntry'

export type Stat = { title: string; value: number; duration: number }

export default function Statistics({
  stats,
}: {
  stats: CompanyStatistic
}): JSX.Element {
  const duration = 450

  const [randomStats, setRandomStats] = useState<Stat[]>([])

  useEffect(() => {
    const res = []
    res.push({
      title: 'Registered on leipzigtech',
      value: stats.number,
      duration,
    })

    let secondStat: [key: string, value: number]

    if (Math.random() > 0.5) {
      secondStat = Object.entries(stats.numberByDistrict)[0]
    } else {
      secondStat = Object.entries(stats.numberBySector)[0]
    }

    res.push({
      title: `Registered in ${secondStat[0]}`,
      value: secondStat[1],
    })

    if (Math.random() > 0.5) {
      res.push({
        title: 'Registered last week',
        value: stats.joinedSince7,
      })
    } else {
      res.push({
        title: 'Registered last month',
        value: stats.joinedSince30,
      })
    }

    setRandomStats(res)
  }, [stats])

  const getAllStatistics = () => {
    return randomStats.map((s) => (
      <StatisticEntry key={s.title} statistic={s} />
    ))
  }

  return (
    <div
      className={`w-full p-4 rounded-xl grid grid-cols-${randomStats.length} gap-4 text-center shadow-xl mb-24`}
    >
      {getAllStatistics()}
    </div>
  )
}
