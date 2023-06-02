'use client'
import PropTypes from 'prop-types'
import { SessionProvider } from 'next-auth/react'

export function AuthProviders({ session, children }) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

AuthProviders.propTypes = {
  children: PropTypes.object,
  session: PropTypes.object,
}
