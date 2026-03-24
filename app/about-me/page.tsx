import { Stack, Grid, Box, Typography, SvgIcon, Icon, Divider } from "@mui/material"
import Image from 'next/image'
import Education from "../components/about-me/education"

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
      <Divider sx={{ width: '100%', my: 4 }} />
      <Box>
        <Typography variant="h3" textAlign={'center'} >
          Education
        </Typography>
        <Education />
      </Box>
    </Stack >
  )
}

export default Home