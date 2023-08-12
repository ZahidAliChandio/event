import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event',
  description: 'Events near your city',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  )
}
