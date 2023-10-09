import './globals.css'
import Navbar from './LocalNavbar'
import ThemeRegistry from './ThemeRegistry/ThemeRegistry'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body style={{ textDecoration: 'none' }}>
        <ThemeRegistry>


          <Navbar />

          {children}

        </ThemeRegistry>
      </body>

    </html>
  )
}
