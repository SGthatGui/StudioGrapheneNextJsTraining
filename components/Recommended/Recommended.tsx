//section for util imports
import React from 'react'
import styles from './Recommended.module.css'
import Link from 'next/link'

//section for component imports
import ProductCard from '../ProductCard/ProductCard'

//section for FC
const Recommended: React.FC = () => {
  return (
    <React.Fragment>
      <section className={styles.recommended}>
        <div className={styles.cathandler}>
          <p>Recommended</p>
          <Link href='/'>Shop all products</Link>
        </div>
        <div className={styles.prodcat}>
          <ProductCard />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Recommended
