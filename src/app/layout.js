import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Next.js 14 - Turismo em Foz Homepage",
    template: "%s | Next.js 14 - Turismo em Foz "
  },
  description: 'Next.js starter app',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="container">


          <Navbar />

          {children}

          <Footer /></div>

      </body>
    </html>
  )
}