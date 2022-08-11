//section for util imports
import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

//section for component imports
import Navigation from '../components/Navigation/Navigation'

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
        <section>
          <h1>All Natural Skin Remedies.</h1>
        </section>
      </main>

      <footer></footer>
    </React.Fragment>
  )
}

export default Landing
