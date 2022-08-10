//section for util imports
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'

//section for component imports

//section for FC
const Landing: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <meta name='description' content='this is my nextjs training' />
        <link rel='icon' href='/heart.png' />
        <title>NextJs Training</title>
      </Head>

      <main>
        <h1> This is the cleanup step of my 1st Next.js App</h1>
      </main>

      <footer></footer>
    </Fragment>
  )
}

export default Landing
