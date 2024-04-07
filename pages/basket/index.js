import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './basket.module.css';
//import { loadStripe } from '@stripe/stripe-js';
//import PaymentBanner from '../PaymentBanner/PaymentBanner';
//import dotenv from 'dotenv';
//dotenv.config();

//const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const cartChangeEvent = new Event('cartChange');

export default function Basket() {
  const [products, setCurrentProducts] = useState([]);
  const [deliveryCost, setDeliveryCost] = useState(5);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setCurrentProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
  }, []);

  const addToCart = (el) => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.push(el);
    localStorage.setItem('products', JSON.stringify(storedProducts));
    console.log('Produit ajouté au panier :', el);
    setCurrentProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
  };

  const deleteAllCart = (el) => {
    let confirmation = window.confirm("Supprimer l'article du panier ?")
    if(confirmation) {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts = storedProducts.filter(
      (product) => !(product.id === el.id && product.selectedSize === el.selectedSize)
    );
    localStorage.setItem('products', JSON.stringify(storedProducts));
    console.log(
      'Tous les produits avec l\'identifiant',
      el.id,
      'et la taille',
      el.selectedSize,
      'ont été supprimés du panier'
    );
    setCurrentProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
    }
  };

  const deleteToCart = (el) => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const indexToRemove = storedProducts.findIndex((product) => product.id === el.id);
      if (indexToRemove !== -1) {
        storedProducts.splice(indexToRemove, 1);
        localStorage.setItem('products', JSON.stringify(storedProducts));
        console.log('Produit supprimé du panier :', el);
        setCurrentProducts(storedProducts);
        window.dispatchEvent(cartChangeEvent);
      }
  };

  const getUniqueProducts = () => {
    const uniqueProductsMap = {};

    products.forEach((currentProduct) => {
      const productName = currentProduct.description;
      if (!uniqueProductsMap[productName]) {
        uniqueProductsMap[productName] = { ...currentProduct, quantity: 1 };
      } else {
        uniqueProductsMap[productName].quantity += 1;
      }
    });

    const uniqueProducts = Object.values(uniqueProductsMap);
    return uniqueProducts;
  };

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    const uniqueProducts = getUniqueProducts();
    uniqueProducts.forEach((el) => {
      totalAmount += el.quantity * el.price;
    });
    return totalAmount;
  };

  const calculateDeliveryCost = () => {
    let totalCost = calculateTotalAmount() > 100 ? 0 : 8;
    return totalCost;
  };

  useEffect(() => {
    const totalAmount = calculateTotalAmount();
   
    setTotal(totalAmount + calculateDeliveryCost());
    setDeliveryCost(calculateDeliveryCost());
  }, [products]);

  // Dans la fonction handlePayment

const handlePayment = async () => {
  try {
    setIsLoading(true);

    // Calculer le montant total en fonction du code promo
    let totalAmount = calculateTotalAmount();
    let deliveryCostWithPromo = calculateDeliveryCost();

    // Si le code promo est appliqué, ajustez le montant total et les frais de livraison
   
    // Créer un tableau de produits comprenant les frais de livraison ajustés
    const productsWithDelivery = [...products, { name: 'Frais de livraison', price: deliveryCostWithPromo, quantity: 1 }];

    // Créer la session de paiement avec le montant total ajusté
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ products: productsWithDelivery}),
    });

    const session = await response.json();

    // Rediriger vers la page de paiement Stripe
    const result = await stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      localStorage.clear();
    }
  } catch (error) {
    console.error('Error handling payment:', error);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Votre panier</h2>
      <section className={styles.basket}>
        {products.length === 0 ? (
          <div className={styles.warning}>Vous n'avez aucun produit dans votre panier</div>
        ) : (
          <div>
            {getUniqueProducts().map((el, index) => (
              <div key={index} className={styles.product}>
                <button onClick={() => deleteAllCart(el)} className={styles.close}>
                  X
                </button>
                <h3 className={styles.name}>{el.description}</h3>
                <div className={styles.infos}>
                  <p className={styles.quantity}>Quantité: {el.quantity}</p>
                  <p className={styles.price}>Prix: {el.price.toFixed(2)}€</p>
                </div>
                <div className={styles.pictureAndBtnContainer}>
                  <button onClick={() => addToCart(el)} className={styles.addBtn}>
                    +
                  </button>
                  <div className={styles.boxPicture}>
                    <Image 
                      className={styles.picture} 
                      src={el.picture} 
                      height={300} 
                      width={250}
                      priority alt="image produit" />
                  </div>
                  <button onClick={() => deleteToCart(el)} className={styles.removeBtn}>
                    -
                  </button>
                </div>
                <div className={styles.nameBackground}>
                  <p className={styles.total}>
                    Total:
                    <span className={styles.spanTotal}> {(el.quantity * el.price).toFixed(2)}€ </span>
                  </p>
                  {el.sizes && <p> Taille: {el.selectedSize}</p>}
                </div>
              </div>
            ))}
            <div className={styles.delivery}>
              <p className={styles.p}>
                Livraison :
                <span className={styles.spanTotal2}> {deliveryCost}€ </span>
              </p>
            </div>
            <div className={styles.productPriceTotal}>
              <p className={styles.totalAmount}>
                Montant total de la commande : <br />
                <span className={styles.spanTotal}> {total.toFixed(2)} € </span>
              </p>
            </div>
            <div className={styles.box}>
              <button className={styles.validate} onClick={() => handlePayment()}>
                {isLoading ? 'Chargement...' : 'Valider'}
              </button>
            </div>
            <p className={styles.warningDelivery}>
              {' '}
              * en cas de rupture de stock, le délai de livraison sera compris entre 2 à 5 semaines.
            </p>
          </div>
        )}
        {/* <PaymentBanner /> */}
      </section>
    </div>
  );
}
