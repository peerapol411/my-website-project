'use client'

import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import { lightTheme, darkTheme } from './theme'
import { useEffect, useState } from 'react'
function MuiProvider({ children }: { children: React.ReactNode }) {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        setTheme('dark')
    }, [])

    if (!mounted) return null

    return (
        <MuiThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            {children}
        </MuiThemeProvider>
    )
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            <MuiProvider>{children}</MuiProvider>
        </NextThemeProvider>
    )
}