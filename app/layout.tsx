import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Surprise V2',
  description: 'Surprise V2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>{children}</body>
    </html>
  )
}