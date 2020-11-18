import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div className="container max-w-screen-xl m-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
