//section for util imports
import React from 'react'
import styles from './MostPopular.module.css'
import Link from 'next/link'
import axios from 'axios'

//section for component imports
import ProductCard from '../ProductCard/ProductCard'

//section for FC
const ProductsOverview: React.FC = () => {
  const [motpop, setMotpop] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setMotpop(
          response.data
            .sort((a, b) => b.rating.rate - a.rating.rate)
            .slice(0, 4)
        )
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
          {motpop.map((item: any) => (
            <ProductCard prod={item} key={item.id} />
          ))}
        </div>
      </section>
    </React.Fragment>
  )
}

export default ProductsOverview
