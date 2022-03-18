import type { NextPage } from 'next'
import Head from 'next/head'
import { Root } from '../src/ui/Home'
import { api, Character } from '../src/api'

interface Props {
  characters: Character[]
}

const Home: NextPage<Props> = ({ characters }) => {
  return (
    <div>
      <Head>
        <title>Filter list</title>
        <meta name="description" content="Filter list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Root characters={characters} />
    </div>
  )
}

export const getStaticProps = async () => {
  const result = await api.characters()
  return {
    props: {
      characters: result
    }
  }
}

export default Home
