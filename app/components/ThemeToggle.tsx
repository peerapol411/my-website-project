'use client'

import { useTheme } from 'next-themes'
import { IconButton, useMediaQuery, useTheme as useMuiTheme } from '@mui/material'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const muiTheme = useMuiTheme()
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'))

    return (
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' && <ToggleOffIcon fontSize='large' sx={{ color: "white" }} />}
            {theme === 'dark' && <ToggleOnIcon fontSize='large' sx={{ color: "grey" }} />}
        </IconButton>
    )
}