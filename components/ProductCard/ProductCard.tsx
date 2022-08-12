//section for util imports
import React from 'react'
import styles from './ProductCard.module.css'
import Link from 'next/link'

//section for component imports
import WNew from '../WNew/WNew'

//section for FC
const ProductCard: React.FC = (props) => {
  return (
    <React.Fragment key={props.id}>
      <div className={styles.productcard}>
        <WNew />
        <img src={props.image} alt='' />
        <h5>{props.title} 'title'</h5>
        <p>{props.description} 'description'</p>
        <p className={styles.price}>{props.price} 'price'</p>
        <button>Add to cart</button>
      </div>
    </React.Fragment>
  )
}

export default ProductCard
