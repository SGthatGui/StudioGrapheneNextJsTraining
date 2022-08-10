//section for util imports
import type { NextPage } from 'next'
import { Fragment } from 'react'

//section for component imports
import Navigation from '../components/Navigation/Navigation'

//section for FC
const Landing: NextPage = () => {
  return (
    <Fragment>
      <Navigation />
      <main>
        <section>
          <h1>All Natural Skin Remedies.</h1>
        </section>
      </main>

      <footer></footer>
    </Fragment>
  )
}

export default Landing
