import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ezio Chifunga',
  description: 'Portifolio Artistico',
  generator: 'Ezio Chifunga',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
