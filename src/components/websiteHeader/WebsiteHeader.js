import React from 'react';
import Navbar from '../navbar/Navbar';
import styles from './WebsiteHeader.module.css';

export default function WebsiteHeader() {
    return <Navbar className={styles.navBar} />;
}
