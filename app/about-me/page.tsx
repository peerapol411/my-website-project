import { Stack, Grid, Box, Typography, SvgIcon, Icon, Divider } from "@mui/material"
import Image from 'next/image'
import Education from "../components/about-me/education"
import WorkExperience from "../components/about-me/workExperience"

const Home = () => {
  const frontendItems = [{
    "path": "/assets/icon/logo-react.svg",
    "alt": "React"
  }, {
    "path": "/assets/icon/logo-nextjs.svg",
    "alt": "Next.js"
  }, {
    "path": "/assets/icon/logo-mui.svg",
    "alt": "MUI"
  },
  {
    "path": "/assets/icon/logo-flutter.svg",
    "alt": "Flutter"
  },
  {
    "path": "/assets/icon/logo-dart.svg",
    "alt": "Dart"
  },
  {
    "path": "/assets/icon/logo-riverpod.jpg",
    "alt": "Riverpod"
  }
  ]

  const backendItems = [{
    "path": "/assets/icon/logo-dot-net-core.jpg",
    "alt": ".NET Core"
  },
  {
    "path": "/assets/icon/logo-postgresql.svg",
    "alt": "PostgreSQL"
  },
  {
    "path": "/assets/icon/logo-dbeaver.png",
    "alt": "DBeaver"
  }
  ]

  const testItems = [{
    "path": "/assets/icon/logo-jest.svg",
    "alt": "Jest"
  },
  {
    "path": "/assets/icon/logo-swagger.svg",
    "alt": "Swagger"
  },
  {
    "path": "/assets/icon/logo-postman.svg",
    "alt": "Postman"
  }
  ]

  const devOpsItems = [{
    "path": "/assets/icon/logo-ms-azure.svg",
    "alt": "Azure DevOps"
  },
  {
    "path": "/assets/icon/logo-git.svg",
    "alt": "Git"
  },
  {
    "path": "/assets/icon/logo-github.svg",
    "alt": "GitHub"
  }
  ]
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
      <Box width={'100%'}>
        <Stack>
          <Typography variant="h3" textAlign={'center'} >
            Skills & Technologies
          </Typography>
          <Grid container>
            <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ p: 2 }}>
              <Typography variant="h6" textAlign="center" mt={2}>Frontend Development</Typography>
              <Typography variant="body1" textAlign="center" dangerouslySetInnerHTML={{ __html: " Web: React, Next.js, MUI (Material UI)<br />Mobile: Flutter, Dart,<br/>State Management: GetX, Riverpod" }} />
              <Stack direction="row" justifyContent="center" spacing={1} mt={2}>
                {frontendItems.map((item) => (
                  <Image key={item.path} src={item.path} alt={item.alt} width={48} height={48} style={{ borderRadius: '8px', border: '1px solid #000000' }} />
                ))}
              </Stack>

            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ p: 2 }}>
              <Typography variant="h6" textAlign="center" mt={2}>Backend & Database</Typography>
              <Typography variant="body1" textAlign="center" dangerouslySetInnerHTML={{ __html: "Framework: .NET (Core)<br/>Database: PostgreSQL<br/>Database Tool: DBeaver" }} />
              <Stack direction="row" justifyContent="center" spacing={1} mt={2}>
                {backendItems.map((item) => (
                  <Image key={item.path} src={item.path} alt={item.alt} width={48} height={48} style={{ borderRadius: '8px', border: '1px solid #000000' }} />
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ p: 2 }}>
              <Typography variant="h6" textAlign="center" mt={2}>Testing & API Tools</Typography>
              <Typography variant="body1" textAlign="center" dangerouslySetInnerHTML={{ __html: "Unit Testing: Jest<br/>API Documentation: Swagger,<br/>Testing: Postman" }} />
              <Stack direction="row" justifyContent="center" spacing={1} mt={2}>
                {testItems.map((item) => (
                  <Image key={item.path} src={item.path} alt={item.alt} width={48} height={48} style={{ borderRadius: '8px', border: '1px solid #000000' }} />
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ p: 2 }}>
              <Typography variant="h6" textAlign="center" mt={2}>DevOps & Version Control</Typography>
              <Typography variant="body1" textAlign="center" sx={{ minHeight: { xs: 'auto', md: '70px', lg: '73px' } }} dangerouslySetInnerHTML={{ __html: "DevOps & Collaboration: Azure DevOps<br/>Version Control: Git, GitHub" }} />
              <Stack direction="row" justifyContent="center" spacing={1} mt={2}>
                {devOpsItems.map((item) => (
                  <Image key={item.path} src={item.path} alt={item.alt} width={48} height={48} style={{ borderRadius: '8px', border: '1px solid #000000' }} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box >
      <Divider sx={{ width: '100%', my: 4 }} />
      <WorkExperience />
      <Divider sx={{ width: '100%', my: 4 }} />
      <Education />
    </Stack >
  )
}

export default Home