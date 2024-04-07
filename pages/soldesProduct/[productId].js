import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { soldes } from '@/data';
import styles from './product.module.css'

export default function Product() {

    const cartChangeEvent = new Event('cartChange');
    const router = useRouter();

    const { productId } = router.query;
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
  }, []);


    const addToCart = () => {
        let storedProducts = JSON.parse(localStorage.getItem('products')) || [];  
        storedProducts.push(product);
        localStorage.setItem('products', JSON.stringify(storedProducts));
        setProducts(storedProducts);
        window.dispatchEvent(cartChangeEvent);
        alert('Le produit a bien été ajouté au panier');
    };
   
    useEffect(() => {
        const storedProduct = JSON.parse(localStorage.getItem('product'));
        if (storedProduct && storedProduct.id === productId) {
            setProduct(storedProduct);
        } else {
            const foundProduct = soldes.find(item => item.id == productId);
            if (foundProduct) {
                setProduct(foundProduct);
                localStorage.setItem('product', JSON.stringify(foundProduct));
            } else {
                console.error("Product not found");
            }
        }
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.card}>
            <h1 className={styles.title}>{product.description}</h1>
            <p className={styles.marque}>Marque: {product.marque}</p>
            <p className={styles.price}>Prix: {product.price.toFixed(2)} €</p>
            <Image 
              width={300}
              height={350}
              src={product.picture}
              alt="image du produit"
              priority
            />
            <button className={styles.btn} onClick={addToCart}>
            Ajouter au panier
        </button>
        </div>
    );
}