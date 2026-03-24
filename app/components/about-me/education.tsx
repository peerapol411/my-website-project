import { Stack, Box, Typography } from '@mui/material';

const Education = () => {

    return (
        <Box mt={2}>
            <Stack direction={"row"} alignItems={'start'}>
                <Typography variant="h6" textAlign="center" mt={-0.3} mr={2}>
                    2018 - 2022</Typography>
                <Stack alignItems={'center'} >
                    <Box width={25} height={25} borderRadius={'50%'} bgcolor={'primary.main'} mb={1} />
                    <Box width={3} height={100} borderRadius={20} bgcolor={'primary.main'} mb={1} />
                </Stack>
                <Stack alignItems={'start'} >
                    <Typography variant="h6" textAlign="center" mt={-0.3} ml={2}>
                        Kasetsart University Si Racha Campus, Computer Science
                    </Typography>
                    <Typography variant="body1" textAlign="center" mt={-0.3} ml={2}>
                        1st Class Honors (3.81 GPA)
                    </Typography>
                    <Typography variant="body1" textAlign="center" mt={-0.3} ml={2}>
                        Member of the Faculty of Science Student Council
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={'start'}>
                <Typography variant="h6" textAlign="center" mt={-0.3} mr={2}>
                    2015 - 2021</Typography>
                <Stack alignItems={'center'} >
                    <Box width={25} height={25} borderRadius={'50%'} bgcolor={'primary.main'} mb={1} />
                    <Box width={3} height={100} borderRadius={20} bgcolor={'primary.main'} mb={1} />
                </Stack>
                <Stack alignItems={'start'} >
                    <Typography variant="h6" textAlign="center" mt={-0.3} ml={2}>
                        Bodindecha (Sing Singhaseni) Samutprakarn School
                    </Typography>
                    <Typography variant="body1" textAlign="center" mt={-0.3} ml={2}>
                        Science-Mathematics Program
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={'start'}>
                <Typography variant="h6" textAlign="center" mt={-0.3} mr={2}>
                    2009 - 2014</Typography>
                <Stack alignItems={'center'} >
                    <Box width={25} height={25} borderRadius={'50%'} bgcolor={'primary.main'} mb={1} />
                </Stack>
                <Stack alignItems={'start'} >
                    <Typography variant="h6" textAlign="center" mt={-0.3} ml={2}>
                        Yindeewit School
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Education;

