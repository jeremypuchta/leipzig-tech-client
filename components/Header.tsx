import React from 'react'

const Header = (): JSX.Element => {
  return (
    <header className="w-full h-16 bg-gray-300 font-mono flex justify-start items-center">
      <span className="text-3xl font-bold pl-5">{'<leipzigtech />'}</span>
      <span className="flex-auto" />
      <a
        className="text-3xl font-bold mr-10 px-2 hover:bg-gray-400"
        href="/about"
      >
        about
      </a>
    </header>
  )
}

export default Header
