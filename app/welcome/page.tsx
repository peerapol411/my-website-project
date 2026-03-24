'use client'

import { Box, Typography, Button, Stack } from "@mui/material"
import { useTheme } from "next-themes"
import Image from 'next/image'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Welcome = () => {
    const router = useRouter()
    const { theme } = useTheme()

    return (
        <Box sx={{ p: 4, textAlign: 'center', width: '100%', display: 'flex' }}>
            <Stack alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
                <Typography variant="h2">
                    Welcome to My Profile!
                </Typography>
                <Image
                    src="/assets/img/profile.jpg"
                    alt="Profile"
                    width={300}
                    height={300}
                    style={{ borderRadius: '50%', border: `4px solid ${theme === 'light' ? '#000000' : '#ffffff'}`, marginTop: "16px", marginBottom: "16px" }}

                />
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                    <EmailIcon />
                    <Typography variant="h6">peerapol.work@gmail.com</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                    <CallIcon />
                    <Typography variant="h6">+66 62 459 3907</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                    <LinkedInIcon fontSize="large" color="primary" onClick={() => window.open('https://www.linkedin.com/in/peerapol-onmanee-91631a213/')} sx={{ cursor: 'pointer' }} />
                    <GitHubIcon fontSize="large" onClick={() => window.open('https://github.com/peerapol411')} sx={{ cursor: 'pointer' }} />
                    <InstagramIcon fontSize="large" color="secondary" onClick={() => window.open('https://www.instagram.com/peerapol.on/')} sx={{ cursor: 'pointer' }} />
                    <FacebookIcon fontSize="large" color="primary" onClick={() => window.open('https://www.facebook.com/peerapol.onmanee')} sx={{ cursor: 'pointer' }} />
                </Stack>
                <Typography variant="h4" mt={2}>
                    Peerapol Onmanee (Best)
                </Typography>
                <Typography variant="h6" mt={2}>
                    Full Stack Developer (Mobile & Web Apps)
                </Typography>
                <Typography variant="h6">
                    I'm currently working for AXONS (CPF IT CENTER) Since 2022.
                </Typography>
                <Typography variant="h6" mt={2}>
                    Flutter | Dart | React | Next.js | .NET (Core)
                </Typography>
                <Stack direction={'row'} mt={4}>
                    <Box>
                        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 1 }} onClick={() => router.push('/projects')}>
                            View My Projects
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="contained" color="inherit" sx={{ mt: 2, mr: 1 }} href="https://www.linkedin.com/in/peerapol-onmanee/" target="_blank">
                            Download Resume
                        </Button>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Welcome