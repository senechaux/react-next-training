import type { NextPage } from 'next'
import Head from 'next/head'
import { Root } from '../src/ui/Home'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Filter list</title>
        <meta name="description" content="Filter list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Root />
    </div>
  )
}

export default Home
