import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelTigerLoader from '../voxel-tiger'

const LazyVoxelTiger = dynamic(() => import('../voxel-tiger'), {
  ssr: false,
  loading: () => <VoxelTigerLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Adrian Portfolio" />
        <meta name="author" content="Adrian" />
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" /> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Adrian" />
        <meta name="og:title" content="Adrian" />
        <meta property="og:type" content="website" />
        <title>Adrian's Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelTiger />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
