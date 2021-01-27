import React from 'react'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between p-4 items-center max-w-5xl mx-auto">
      <Link href="/">
        <a>
          <h1 className="text-md font-semibold sm:text-lg lg:text-2xl">
            leipzigtech.
          </h1>
        </a>
      </Link>
      <div>
        <Link href="/companies">
          <a className="mr-3">
            <button
              type="button"
              className="px-4 py-2 rounded shadow text-black hover:bg-blue-800 hover:text-white"
            >
              Companies
            </button>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
