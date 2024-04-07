import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import styles from './category.module.css'

export default function Category(props) {

  const router = useRouter();
  const navigateToProductDetail = () => {
    router.push(props.link);
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
        <p className={styles.price}> {props.price.toFixed(2)} € </p>
        <button className={styles.btn} onClick={navigateToProductDetail}>
            Voir le produit
        </button>       
    </section>
  )
}