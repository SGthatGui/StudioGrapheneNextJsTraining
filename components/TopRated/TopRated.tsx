//section for util imports
import React from 'react'
import styles from './TopRated.module.css'
import Link from 'next/link'

//section for component imports
import ProductCard from '../ProductCard/ProductCard'

//section for FC
const TopRated: React.FC = () => {
  return (
    <React.Fragment>
      <section className={styles.toprated}>
        <div className={styles.cathandler}>
          <p>Top Rated</p>
          <Link href='/'>Shop all products</Link>
        </div>
        <div className={styles.prodcat}>
          <ProductCard />
        </div>
      </section>
    </React.Fragment>
  )
}

export default TopRated
