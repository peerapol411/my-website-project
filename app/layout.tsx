"use client"

import { ReactNode } from "react"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import TopNavbar from "./components/TopNavBar"

const theme = createTheme()

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TopNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}