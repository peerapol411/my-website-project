import { Box, Typography, Button } from "@mui/material"

const Welcome = () => {
    return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
                Welcome to My Profile!
            </Typography>
            <Typography variant="body1" gutterBottom>
                This is your personal dashboard.
            </Typography>
            <Button variant="contained" color="primary">
                Get Started
            </Button>
        </Box>
    )
}

export default Welcome