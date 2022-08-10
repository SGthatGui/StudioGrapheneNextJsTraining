//section for util imports
import React from 'react'
import Head from 'next/head'

//section for component imports

//section for FC
const Navigation: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name='description' content='this is my nextjs training' />
        <link rel='icon' href='/heart.png' />
        <title>NextJs Training</title>
      </Head>
      <header></header>
    </React.Fragment>
  )
}

export default Navigation
