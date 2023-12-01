import { Jost } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'KyzAnimeList',
  description: 'A list of anime that I have watched.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-owned-dark-300 text-owned-light-500`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
