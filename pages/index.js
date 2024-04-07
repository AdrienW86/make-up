import Head from 'next/head'
import Banner from '@/components/Banner/Banner'
import Background from '@/assets/banner.jpg'
import Background2 from '@/assets/promo.jpg'
import Background3 from '@/assets/news.jpg'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Make Up</title>
        <meta name="description" content="Boutique en ligne de bijoux et maquillage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className={styles.main}>
      <Banner 
        title="La boutique"
        link="/shop"
        description=" Découvrez l'ensemble de nos produits"
        background= {Background} 
      />
      <Banner 
        title="Les bons plans"
        link="/soldes"
        description=" Découvrez nos promotions"
        background= {Background2} 
      />
      <Banner 
        title="Les Nouveautés"
        link="/news"
        description=" Découvrez nos dernières nouveautés"
        background= {Background3} 
      />
      </main>
    </>
  )
}
