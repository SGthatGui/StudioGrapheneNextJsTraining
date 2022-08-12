//section for util imports
import React, { useState } from 'react'
import styles from './MostPopular.module.css'
import Link from 'next/link'
import axios from 'axios'

//section for component imports
import ProductCard from '../ProductCard/ProductCard'

//section for FC
const ProductsOverview: React.FC = () => {
  const [motpop, setMotpop] = React.useState()

  const filteredproducts = (arr: any) => {
    /* arr.filter((el: any) => el.rating.rate > 4.2) */
    /* console.log(motpop.filter((el: any) => el.rating.rate > 4.2)) */
    console.log(
      motpop
        .sort((a, b) => a.rating.rate - b.rating.rate)
        .filter((el: any) => el.rating.rate > 4.2)
    )
  }

  React.useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setMotpop(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <React.Fragment>
      <section className={styles.mostpopular}>
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
        <button onClick={filteredproducts}>test</button>
      </section>
    </React.Fragment>
  )
}

export default ProductsOverview
