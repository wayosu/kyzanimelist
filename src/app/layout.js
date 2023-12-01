import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KyzAnimeList',
  description: 'A list of anime that I have watched.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>TESTING</h1>
        {children}
      </body>
    </html>
  )
}
