import React from 'react'
import NewsCard from '@/components/NewsCard/Card'
import {news} from '@/data'
import styles from '@/styles/shop.module.css'

export default function News() {
  return (
   <section >
    <h1 className={styles.title}> Les nouveautés </h1>
        <section className={styles.container}>
            {news.map((el, index) => (
              <NewsCard                
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