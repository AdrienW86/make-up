import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import styles from './card.module.css'

export default function Card(props) {

  const router = useRouter();
  const navigateToProductDetail = (id) => { 
    router.push(`/soldesProduct/${id}`);
  }

  return (
    <section className={styles.card}>
      <h2 className={styles.title}> {props.name}</h2>
        <div className={styles.picture}>
          <Image 
            width={230}
            height={300}
            src={props.picture}
            alt="image du produit"
            priority
          />
        </div>       
        <p className={styles.marque}> {props.marque} - {props.description} </p>
        <p className={styles.price}> 
          <span className={styles.oldPrice}>{props.oldPrice.toFixed(2)} € </span>
          {props.price.toFixed(2)} € 
        </p>
        <button className={styles.btn} onClick={() => navigateToProductDetail(props.id)}>
            Voir le produit
        </button>       
    </section>
  )
}