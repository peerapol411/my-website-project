import { Box, Stack, Typography } from "@mui/material";
const WorkExperience = () => {
    return (
        <Box width={800}>
            <Typography variant="h3" textAlign={'center'} >
                Work Experience
            </Typography>
            <Typography variant="h4" textAlign="center" mt={2}>
                Software Developer | AXONS (CPF IT Center)
            </Typography>
            <Typography variant="h5" textAlign="center" mt={1} sx={{ fontStyle: 'italic' }}>
                June 2022 – Present
            </Typography>
            <ul style={{
                textAlign: 'left',
                display: 'inline-block',
                lineHeight: '1.8'
            }}>
                <li>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body1" fontWeight="bold">
                            Role:
                        </Typography>
                        <Typography variant="body1" mt={0.5}>
                            Full Stack Developer (Frontend Heavy)
                        </Typography>
                    </Stack>

                </li>
                <li>
                    <Typography variant="body1" fontWeight="bold">
                        Key Responsibilities & Achievements:
                    </Typography>
                    <ul style={{ marginLeft: 16 }}>
                        <li>
                            <Typography variant="body1">
                                Developed and maintained enterprise-level Mobile Applications for farmers and livestock specialists using Flutter with GetX and Riverpod for robust state management.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Built and optimized Web Applications using React and Next.js, ensuring a seamless and responsive user experience.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Collaborated on Backend services using ASP.NET Core and PostgreSQL to support data-intensive operations.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Practiced Agile/Scrum methodology, participating in sprint planning, daily stand-ups, and code reviews to ensure high-quality delivery.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Implemented Unit Testing using Jest to improve code reliability and reduce production bugs.
                            </Typography>
                        </li>
                    </ul>
                </li>
            </ul>
            <Typography variant="h4" textAlign="center" mt={2}>
                Full Stack Developer Intern | efinX (efinx Co., Ltd.)
            </Typography>
            <Typography variant="h5" textAlign="center" mt={1} sx={{ fontStyle: 'italic' }}>
                May 2021 – November 2021
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1" fontWeight="bold" mt={2}>
                        Key Responsibilities & Achievements:
                    </Typography>
                </li>
                <ul style={{ marginLeft: 16 }}>
                    <li>
                        <Typography variant="body1">
                            Co-op Project: Developed a SET50 Trading Signal System using Vue.js for the frontend and Python (FastAPI) for the backend, integrating with Settrade API for real-time data analysis.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1">
                            Mini Project: Created a Lucky Wheel Giveaway Program using Vue.js, Node.js (Express), and PostgreSQL to handle promotional activities.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1">
                            Gained hands-on experience in full-cycle web development and API integration in a professional financial tech environment.
                        </Typography>
                    </li>
                </ul>
            </ul>
        </Box>
    )
}

export default WorkExperience;