//section for util imports
import React from 'react'
import styles from './Hero.module.css'

//section for component imports
import WNew from '../WNew/WNew'

//section for FC
const Hero: React.FC = () => {
  return (
    <React.Fragment>
      <section className={styles.hero}>
        <div className={styles.herocta}>
          <WNew />
          <h1>All Natural Skin Remedies.</h1>
          <p>
            A healthier you from the inside out. We’ve sourced the cleanest
            ingredients to create a line of clean skin care treatments that
            leave you feeling your best
          </p>
          <button>Shop products</button>
        </div>
        <div className={styles.heroimg}>
          <img src='' alt='' />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Hero
