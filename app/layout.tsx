"use client"

import { ReactNode } from "react"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import TopNavbar from "./components/TopNavBar"
import { IBM_Plex_Sans_Thai } from 'next/font/google'
import { Providers } from './providers'

const ibmPlexThai = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-main',
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ibmPlexThai.variable}>
        <Providers>
          <CssBaseline />
          <TopNavbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}