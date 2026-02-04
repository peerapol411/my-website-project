import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
    },
  },
  typography: {
    fontFamily: 'var(--font-main), sans-serif',
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f172a',
      paper: '#020617',
    },
    text: {
      primary: '#e5e7eb',
    },
  },
  typography: {
    fontFamily: 'var(--font-main), sans-serif',
  },
})