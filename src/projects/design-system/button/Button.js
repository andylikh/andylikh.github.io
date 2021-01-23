import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, onClick, loading }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
            {loading ? <div className={styles.loading} /> : null}
        </button>
    );
}
