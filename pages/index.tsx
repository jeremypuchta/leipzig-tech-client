import React from 'react'

export default function Index(): JSX.Element {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold">
        Welcome to leipzigtech{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      <p className="text-xl">
        A central register of tech companies in Leipzig and the Leipzig area.
      </p>
    </div>
  )
}
