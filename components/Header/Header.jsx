import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Basket from '@/assets/basket.png';
import Logo from '@/assets/logo.png'
import styles from './header.module.css'

export default function Header() {

    const router = useRouter()

    const [productsLength, setProductsLength] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (router.pathname === '/success') {
          localStorage.clear();
        } else {
          const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
          setProductsLength(storedProducts.length);
        }
        const updateProductsLength = () => {
          const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
          setProductsLength(storedProducts.length);
        };
        window.addEventListener('cartChange', updateProductsLength);
        return () => {
          window.removeEventListener('cartChange', updateProductsLength);
        };
      }, [router.pathname]);

  return (
    <header className={styles.header}>
         <Link  href='/basket'> 
            <div className={styles.menu_basket}>
                <Image 
                    src={Basket}
                    height={30}
                    width={30}
                    className={styles.logoBasket}
                    alt="image du panier"
                />         
                {productsLength === 0 ? null : 
                <span className={styles.span}>{productsLength && `${productsLength}`}</span> 
                }
            </div>      
        </Link>
        <Link href='/'>
            <Image 
                width={200}
                height={200}
                src={Logo}
                priority
                alt="logo"
            />
       </Link>
        <div className={styles.buttonBox}> 
            <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} onClick={handleMenuToggle} aria-label="hamburger button">
                <span className={styles.line}> </span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </button>
        </div>
        {isMenuOpen && 
          <section className={styles.menu}>
            <ul>
              <li className={styles.li}> <Link href="/" onClick={handleMenuToggle}> Accueil </Link></li>
              <li className={styles.li}> <Link href="/shop" onClick={handleMenuToggle}> Boutique </Link></li>
              <li className={styles.li}> <Link href="/soldes" onClick={handleMenuToggle}> Promos </Link></li>
              <li className={styles.li}> <Link href="news" onClick={handleMenuToggle}> Nouveautés </Link></li>
            </ul>
          </section>}
    </header>
  )
}
