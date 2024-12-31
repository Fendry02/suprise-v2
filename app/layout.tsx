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
    <html lang="en" data-theme="valentine">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
