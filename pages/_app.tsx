import '../styles/globals.css'

import { SSRCookies, SSRKeycloakProvider } from '@react-keycloak/ssr'
import cookie from 'cookie'
import { IncomingMessage } from 'http'
import { AppContext, AppProps } from 'next/app'
import React from 'react'

import Layout from '../components/Layout'

const keycloakCfg = {
  url: 'http://localhost:8083/auth',
  realm: 'baeldung',
  clientId: 'jwtClient',
}

interface InitialProps {
  cookies: unknown
}

function App({
  Component,
  pageProps,
  cookies,
}: AppProps & InitialProps): JSX.Element {
  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakCfg}
      persistor={SSRCookies(cookies)}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRKeycloakProvider>
  )
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || '')
}

export const getInitialProps = async (context: AppContext) => {
  return {
    cookies: parseCookies(context?.ctx?.req),
  }
}
export default App
