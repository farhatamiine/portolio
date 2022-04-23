import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Client from '../components/client'
import Contact from '../components/contact'
import { gql, GraphQLClient } from 'graphql-request'

import { Header } from '../components/header'
import Work from '../components/work'

export const getStaticProps = async () => {
  const GRAPHQL_ENDPOINT: string =
    'https://api-eu-central-1.graphcms.com/v2/ckrbecswj0n2e01xpfi9v8tme/master'

  const graphQlClient = new GraphQLClient(GRAPHQL_ENDPOINT)
  const query = gql`
    {
      experienceSections {
        sectionTitle
        sectionDescription
        experiences {
          id
          companyName
          experience {
            html
          }
          sectionTitle
          skills
        }
      }
    }
  `
  const data = await graphQlClient.request(query)
  return {
    props: {
      data,
    },
  }
}

interface PropType {
  data: []
}
const Home: NextPage<PropType> = ({ data }: PropType) => {
  const { experienceSections } = data
  return (
    <>
      <Head>
        <title>Amine Farhat - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Work />
      <Client experienceSection={experienceSections} />
      <Contact />
      <Script src="https://res.cloudinary.com/diab-control/raw/upload/v1650669449/main_y0silh.js"></Script>
    </>
  )
}

export default Home
