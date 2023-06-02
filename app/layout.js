import './globals.css'
import PropTypes from 'prop-types'
import { Inter } from 'next/font/google'
import { Providers } from '@/redux/provider'
import { AuthProviders } from './provider'
import Topbar from './components/topbar/Topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prestalana Challenge',
  description: 'Made by Fabricio Lukestik',
}

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProviders session={session}>
          <Providers>
            <Topbar />
            {children}
          </Providers>
        </AuthProviders>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.object,
  session: PropTypes.object,
}
