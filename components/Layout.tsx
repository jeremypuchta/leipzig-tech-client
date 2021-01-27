import React from 'react'
import Head from 'next/head'

import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>leipzigtech.</title>
      </Head>
      <Header />
      <main className="mt-10 px-4 min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
