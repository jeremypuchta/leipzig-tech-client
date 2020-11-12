import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div className="flex flex-col justify-between">
      <Header />

      <main className="mb-auto">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
