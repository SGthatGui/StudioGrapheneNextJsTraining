//section for util imports
import React from 'react'
import styles from './ProductCard.module.css'
import Link from 'next/link'

//section for component imports
import WNew from '../WNew/WNew'

//section for FC
const ProductCard: React.FC = (props) => {
  return (
    <React.Fragment>
      <div className={styles.productcard}>
        <WNew />
        <img src={props.prod?.image} alt='' />
        <h5>{props.prod?.title}</h5>
        <p>{props.prod?.description}</p>
        <p className={styles.price}>${props.prod?.price}</p>
        <button>Add to cart</button>
      </div>
    </React.Fragment>
  )
}

export default ProductCard
