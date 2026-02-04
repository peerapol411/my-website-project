import { AppBar, Toolbar, Typography, IconButton, Stack, Button, Box, useMediaQuery, useTheme as useMuiTheme } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { usePathname, useRouter } from 'next/navigation'; // For App Router
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";
import { Drawer } from "@mui/material"
import { useState } from "react";


const navItems = [
    { label: 'Welcome', path: '/welcome' },
    { label: 'Home', path: '/home' },
    { label: 'Profile', path: '/profile' },
    { label: 'Projects', path: '/projects' },
]

export default function TopNavbar() {
    const router = useRouter();
    const { theme } = useTheme()
    const pathname = usePathname()

    const muiTheme = useMuiTheme()
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'))


    const [open, setOpen] = useState(false)

    const NavItems = ({ onItemClick }: { onItemClick?: () => void }) => (
        <>
            {navItems.map(item => {
                const isActive = pathname === item.path
                return (
                    <Box
                        key={item.path}
                        sx={{
                            px: 2,
                            height: 44,
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: 2,
                            cursor: 'pointer',
                            border: isActive ? '1px solid white' : '1px solid transparent',
                            backgroundColor: isActive
                                ? 'rgba(255,255,255,0.15)'
                                : 'transparent',
                            transition: 'all 0.2s ease',
                        }}
                        onClick={() => {
                            router.push(item.path)
                            onItemClick?.()
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'white',
                                fontWeight: isActive ? 600 : 400,
                            }}
                        >
                            {item.label}
                        </Typography>
                    </Box>
                )
            })}
        </>
    )

    return (
        <AppBar position="static" sx={{
            backgroundColor: theme === "light" ? '#3467bf' : 'dark',
        }}>
            <Toolbar sx={{ position: 'relative' }}>
                {isMobile && <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>}

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        letterSpacing: 0.5,
                    }}
                >
                    My Profile
                </Typography>

                {!isMobile && <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginLeft: 'auto' }}
                    alignItems="center"
                >
                    <NavItems />
                    <ThemeToggle />
                </Stack>}

                {isMobile && <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <Stack
                        spacing={2}
                        sx={{
                            width: 240,
                            p: 2,
                            backgroundColor: theme === 'light' ? '#3467bf' : 'dark',
                            height: '100%',
                        }}
                    >
                        <Typography variant="h6" color="white">
                            Menu
                        </Typography>

                        <NavItems onItemClick={() => setOpen(false)} />
                        <Box sx={{
                            px: 2,
                            height: 0,
                            display: 'flex',
                        }}>
                            <ThemeToggle />
                        </Box>
                    </Stack>
                </Drawer>}
            </Toolbar>
        </AppBar >
    )
}