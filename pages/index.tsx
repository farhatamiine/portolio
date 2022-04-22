import type { NextPage } from 'next'
import Head from 'next/head'
import Client from '../components/client'
import Contact from '../components/contact'
import { Header } from '../components/header'
import Work from '../components/work'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Amine Farhat - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Work />
      <Client />
      <Contact />
    </>
  )
}

export default Home
