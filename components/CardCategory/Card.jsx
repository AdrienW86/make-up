import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './card.module.css'

export default function Card({data}) {

  const cartChangeEvent = new Event('cartChange');
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
  }, [])

  const addToCart = () => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];  
    storedProducts.push(data[currentProduct]);
    localStorage.setItem('products', JSON.stringify(storedProducts));
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
    alert('Le produit a bien été ajouté au panier');
};

  const handleSelectProduct = (index) => {
    setCurrentProduct(index);
};

  return (
    <section className={styles.card}>
      <h2 className={styles.title}> {data[currentProduct].name}</h2>
        <div className={styles.picture}>
          <Image 
            width={230}
            height={300}
            src={data[currentProduct].picture}
            alt="image du produit"
            priority
          />
        </div>       
        <p className={styles.marque}> {data[currentProduct].marque} - {data[currentProduct].description} </p>
        <p className={styles.price}> {data[currentProduct].price.toFixed(2)} € </p>
        <div className={styles.color}> 
          {data.map((el, index) => (
            <p 
              key={index} 
              className={styles.item}
              onClick={() => handleSelectProduct(index)}>{el.color}</p>
          ))}
        </div>
        <button className={styles.btn} onClick={addToCart}>
            Ajouter au panier
        </button>    
        <p className={styles.p}> <span className={styles.span}> Composition: </span> {data[currentProduct].composition}</p>
        <p className={styles.p}> <span className={styles.span}> Mode d'emploi: </span> {data[currentProduct].emploi}</p>
        <p className={styles.p}> <span className={styles.span}> Attention: </span> {data[currentProduct].warning}</p>
    </section>
  )
}