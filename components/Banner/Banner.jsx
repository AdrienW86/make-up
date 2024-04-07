import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './banner.module.css'

export default function Banner(props) {
  return (
    <div className={styles.container}>  
         <Link href={`${props.link}`}>
            <section className={styles.banner}>       
                <h1 className={styles.h1}> {props.title} </h1>
                    <p className={styles.description}>                
                        {props.description}
                    </p>
                <Image 
                    src={props.background}
                    fill
                    priority       
                    alt='banner'
                    className={styles.background}
                />  
            </section>         
         </Link>
    </div>
  )
}
