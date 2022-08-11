//section for util imports
import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

//section for component imports
import Navigation from '../components/Navigation/Navigation'
import Hero from '../components/Hero/Hero'

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
      </main>

      <footer></footer>
    </React.Fragment>
  )
}

export default Landing
