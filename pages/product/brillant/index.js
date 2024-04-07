import React from 'react';
import { brillant } from '@/data';
import CardCategory from '@/components/CardCategory/Card';
import styles from '@/styles/shop.module.css';

export default function Index() {
   
    return (
        <section>
            <h1 className={styles.title}>Vernis à ongles effet gel laque brillant diamant</h1>
            <section className={styles.container}>
                <CardCategory
                    data={brillant}
                />
            </section>
        </section>
    );
}