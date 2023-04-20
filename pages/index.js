import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import { IoLogoGoogle, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GridItemStyle } from '../components/grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Layout = ({ children }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  )
}

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, This is Adrian, Saying Hi - 喂你好啊!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Adrian
          </Heading>
          <p>Full Stack Developer (Algorithm / Application / Design)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/ahha.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>
        <Paragraph>
          I am a freelance and a full-stack developer based in Hong Kong with a
          passion to solve problems essential to sociaties by using my skill set in 
          design and development as well as machine learning.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work Bio
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          Partnered with a German IoT startup and created IoT device for physical therapy and weight training
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked as a data scientist and software developer in a Southeastern Asian ecommerce firm. Built a custom CRM with Deep Learning
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked as a network engineer to mine a cryptocurrency
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked as a mobile developer to create a crypto exchange application
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Working as a self-employed developer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          {' '}
          <Link href="https://www.youtube.com/watch?v=9-uUfwGErP8" target="_blank">
          Cinematic Music
          </Link>, 
            Painting
          , Poem, Philosophy, Guitar
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Online Presences
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/JuraIsUnavaliableFromGin" target="_blank">
              <Button
                variant="ghost"
                colorScheme="red"
                leftIcon={<IoLogoGithub />}
              >
                github_adrian
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              <Button
                variant="ghost"
                colorScheme="red"
                leftIcon={<IoLogoGoogle />}
              >
                gmail_ccso_rj_291
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Credit
        </Heading>
        <Paragraph>
          This site is based on the <Link href="https://www.craftz.dog/" target="_blank">@craftzdog</Link> website.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
