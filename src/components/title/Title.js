import React from 'react';
import styles from './title.module.css';

export default function Title({ header, subHeader }) {
    return (
        <div className={styles.titleWrapper}>
            <h1 className={styles.header}>{header}</h1>
            <h2 className={styles.subHeader}>{subHeader}</h2>
        </div>
    );
}
