import { Stack, Box, Typography, Divider } from "@mui/material"
import Image from 'next/image'
import Education from "../components/about-me/education"
import WorkExperience from "../components/about-me/workExperience"
import SkillAndTechnology from "../components/about-me/skillAndTechnology"

const Home = () => {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ width: '100%', p: 4 }}>
      <Typography variant="h2" mb={2}>
        About Me
      </Typography>
      <Image
        src="/assets/img/profile-painting.jpg"
        alt="Profile"
        width={400}
        height={300}
        style={{ borderRadius: '8px' }}
      />
      <Box sx={{ mt: 4, maxWidth: 800, textAlign: 'center' }}>
        <Typography variant="body1" mt={2} textAlign="center" dangerouslySetInnerHTML={{ __html: "I'm Peerapol Onmanee, Full Stack Developer based in Thailand with a strong focus on Frontend excellence. Since June 2022,<br>I’ve been a key part of the developing team at AXONS (CPF IT Center),</br> where I specialize in building high-performance Mobile and Web applications. Operating in an Agile/Scrum environment." }} />
        <Typography variant="body1" mt={2} textAlign="center" dangerouslySetInnerHTML={{ __html: " Currently focused on mastering Containerization (Docker) and automating software delivery through CI/CD.<br/>I believe that great frontend experiences start with a solid, automated infrastructure, and I'm actively building my skills in DevOps to achieve that." }} />
      </Box>
      <Divider sx={{ width: '100%', my: 4 }} />
      <SkillAndTechnology />
      <Divider sx={{ width: '100%', my: 4 }} />
      <WorkExperience />
      <Divider sx={{ width: '100%', my: 4 }} />
      <Education />
    </Stack >
  )
}

export default Home