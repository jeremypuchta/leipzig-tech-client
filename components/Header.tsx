import React from 'react'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between p-4 font-mono items-center">
      <h1 className="text-md font-semibold sm:text-lg lg:text-2xl">
        {'<leipzigtech />'}
      </h1>
      <Link href="/about">
        <a>
          <button
            type="button"
            className="text-md hover:text-blue-700 sm:text-lg"
          >
            /about
          </button>
        </a>
      </Link>
    </header>
  )
}

export default Header
