//section for util imports
import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

//section for component imports
import Navigation from '../components/Navigation/Navigation'
import Hero from '../components/Hero/Hero'
import MostPopular from '../components/MostPopular/MostPopular'
import TopRated from '../components/TopRated/TopRated'
import Recommended from '../components/Recommended/Recommended'

//section for FC
const Landing: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name='description' content='this is my nextjs training' />
        <link rel='icon' href='/heart.png' />
        <title>NextJs Training</title>
      </Head>
      <Navigation />
      <main>
        <Hero />
        <MostPopular />
        <TopRated />
        <Recommended />
      </main>

      <footer></footer>
    </React.Fragment>
  )
}

export default Landing
