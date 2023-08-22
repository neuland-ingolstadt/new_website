import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Window from '@/components/Window'
import Tabs from '@/components/Tabs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Window>
          <Tabs />
          {children}
        </Window>
      </body>
    </html>
  )
}
