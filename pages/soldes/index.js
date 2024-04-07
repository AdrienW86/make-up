import React from 'react'
import SoldesCard from '@/components/SoldesCard/Card'
import Category from '@/components/Category/Category'
import {soldes} from '@/data'
import styles from './soldes.module.css'

export default function Soldes() {
    return (
        <section >
         <h1 className={styles.title}> Les bonnes affaires </h1>
             <section className={styles.container}>
                 {soldes.map((el, index) => (
                   <SoldesCard                
                     key={index}
                     id={el.id}
                     name={el.name}
                     marque={el.marque}
                     description={el.description}
                     oldPrice={el.oldPrice}
                     price={el.price}
                     picture={el.picture}
                   />  
                 ))}
                
             </section>
        </section>
       )
     }
