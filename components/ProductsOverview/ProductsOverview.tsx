//section for util imports
import React from 'react'
import styles from './ProductsOverview.module.css'
import Link from 'next/link'

//section for component imports
import ProductCard from '../ProductCard/ProductCard'

//section for FC
const ProductsOverview: React.FC = () => {
  return (
    <React.Fragment>
      <section className={styles.productsoverview}>
        <div className={styles.prooverban}>
          <h2>Solutions for all skin health</h2>
          <p>Explore our innovative skincare products</p>
        </div>
        <div className={styles.cathandler}>
          <p>Most Popular</p>
          <Link href='/'>Shop all products</Link>
        </div>
        <div className={styles.prodcat}>
          <ProductCard />
        </div>
      </section>
    </React.Fragment>
  )
}

export default ProductsOverview
