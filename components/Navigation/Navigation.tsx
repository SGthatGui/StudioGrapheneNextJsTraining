//section for util imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './Navigation.module.css'

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
      <header>
        <nav id={styles.navsec}>
          <div className={styles.upperslice}>
            <ul>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/consultation'>Consultation</Link>
              </li>
              <li id={styles.logo}>
                <Link href='/'>sooth</Link>
              </li>
              <li>Q</li>
              <li>
                <Link href='/cart'>Cart</Link>
              </li>
              <li>
                <Link href='/login'>Login</Link>
              </li>
            </ul>
          </div>
          <div className={styles.lowerslice}>
            <ul>
              <li>
                <Link href='/acne'>Acne</Link>
              </li>
              <li>
                <Link href='/sun'>Sun</Link>
              </li>
              <li>
                <Link href='/ezcema'>Ezcema</Link>
              </li>
              <li>
                <Link href='/psoriasis'>Psoriasis</Link>
              </li>
              <li>
                <Link href='/vitiligio'>Vitiligio</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Navigation
