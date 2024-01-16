import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Chip',
  description: 'React chip assignment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <header className='bg-white shadow text-slate-950 font-medium p-4 text-center'>
          Zepto Assignment
        </header>
        {children}
        <footer className='bg-white text-center text-black p-4 underline underline-offset-8 hover:text-slate-700'>
        <Link target='_blank' href='https://meaditya.com'> Made with ❤️ by Aditya K.</Link>
        </footer>
      </body>
    </html>
  )
}
