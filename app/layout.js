// Step 4: Import and add Header component here

import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Rick and Morty Trivia',
  description: 'Explore characters from Rick and Morty',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
