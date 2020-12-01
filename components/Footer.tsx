import React from 'react'

const Footer = (): JSX.Element => {
  return (
    <footer className="mt-24 mx-auto py-12 px-4 bg-blue-800 text-sm">
      <div className="text-center text-white mt-8">
        <p className="">
          This site is <span className="font-bold">not</span> tracking your
          personal information.
        </p>
        <p className="pt-2">
          © 2020 Ali Al-Ali, Fabian Frings, Jeremy Puchta, Fabian Wenzel, Tobias
          Zschietzschmann. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
