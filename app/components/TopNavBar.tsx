import { AppBar, Toolbar, Typography, IconButton, Stack, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useRouter } from 'next/navigation'; // For App Router

const navItems = [
    { label: 'Welcome', path: '/welcome' },
    { label: 'Home', path: '/home' },
    { label: 'Profile', path: '/profile' },
    { label: 'Projects', path: '/projects' },
]

export default function TopNavbar() {
    const router = useRouter();
    return (
        <AppBar position="static">
            <Toolbar>
                <Stack
                    justifyContent={"space-between"}
                    alignItems="center"
                    sx={{ width: '100%' }}
                    direction={"row"}>
                    <Stack direction="row">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">My Profile</Typography>
                    </Stack>


                    <Stack direction="row" spacing={2}>
                        {navItems.map(item => (
                            <Button
                                key={item.path}
                                onClick={() => router.push(item.path)}
                                sx={{
                                    color: 'white',
                                    '&.active': {
                                        borderBottom: '2px solid white',
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Stack>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}