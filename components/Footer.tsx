import React from 'react'

const Footer = (): JSX.Element => {
  return (
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
  )
}

export default Footer
