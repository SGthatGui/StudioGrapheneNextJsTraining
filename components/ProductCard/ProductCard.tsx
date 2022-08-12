//section for util imports
import React from 'react'
import styles from './ProductCard.module.css'
import Link from 'next/link'

//section for component imports
import WNew from '../WNew/WNew'

//section for FC
const ProductCard: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.productcard}>
        <WNew />
        <img src='' alt='' />
        <h5>dolor sit</h5>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p className={styles.price}>$5.99</p>
        <button>Add to cart</button>
      </div>
    </React.Fragment>
  )
}

export default ProductCard
