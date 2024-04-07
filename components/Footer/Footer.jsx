import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
   <footer className={styles.footer}>   
      <div> <Link href='https://code-v.fr' className={styles.li} > Réalisé par <span className={styles.span}> Codev </span> </Link>  </div>
      <ul className={styles.ul}>
        <li> <Link href='/mentions' className={styles.li}> Mentions Légales </Link> </li>
        <li> <Link href='/conditions' className={styles.li}> Conditions Générales de vente </Link> </li>          
      </ul>
      <p className={styles.copyright}> © Make UP - {currentYear}</p>
   </footer>
  )
}