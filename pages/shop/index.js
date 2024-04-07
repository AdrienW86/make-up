import React from 'react'
import Card from '@/components/Card/Card'
import Category from '@/components/Category/Category'
import {data, category} from '@/data'
import styles from '@/styles/shop.module.css'

export default function Shop() {
  return (
   <section >
    <h1 className={styles.title}> Tous les produits </h1>
        <section className={styles.container}>
          {category.map((el, index) => (
            <Category                
              key={index}
              id={el.id}
              name={el.name}
              marque={el.marque}
              description={el.description}
              price={el.price}
              picture={el.picture}
              link={el.link}
            />  
          ))}   
          {data.map((el, index) => (
            <Card                
              key={index}
              id={el.id}
              name={el.name}
              marque={el.marque}
              description={el.description}
              price={el.price}
              picture={el.picture}
            />  
          ))}
        </section>
   </section>
  )
}