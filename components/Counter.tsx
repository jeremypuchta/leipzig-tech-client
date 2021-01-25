import React, { useEffect, useState } from 'react'

export default function Counter({
  value,
  duration,
}: {
  value: number
  duration: number
}): JSX.Element {
  const [count, setCount] = useState<number>(0)
  const steps = 45

  useEffect(() => {
    if (count >= value) {
      setCount(value)
      return
    }

    const step = value / steps

    setTimeout(() => {
      setCount(Math.ceil(count + step))
    }, duration / steps)
  }, [count])

  return (
    <div className="count">
      <span>{count}</span>
    </div>
  )
}
