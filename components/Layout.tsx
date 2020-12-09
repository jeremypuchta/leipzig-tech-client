import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div>
      <Header />
      <main className="mt-10 px-4 min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
