import React from 'react'

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div className="flex flex-col justify-between">
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

      <main className="mb-auto">{children}</main>

      <footer className="w-full h-10 bg-gray-300 font-mono flex justify-center items-center">
        <a className="text-lg font-bold mr-10 px-2 hover:bg-gray-400" href="/">
          Impressum
        </a>
        <a className="text-lg font-bold mr-10 px-2 hover:bg-gray-400" href="/">
          Datenschutz
        </a>
        <a className="text-lg font-bold mr-10 px-2 hover:bg-gray-400" href="/">
          Kontakt
        </a>
      </footer>
    </div>
  )
}

export default Layout
