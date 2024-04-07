import React from 'react';
import { easy } from '@/data';
import CardCategory from '@/components/CardCategory/Card';
import styles from '@/styles/shop.module.css';

export default function Index() {
   
    return (
        <section>
            <h1 className={styles.title}>Vernis à ongles effet gel laque brillant diamant</h1>
            <section className={styles.container}>
                <CardCategory
                    data={easy}
                />
            </section>
        </section>
    );
}