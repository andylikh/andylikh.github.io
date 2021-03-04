import React from 'react';
import styles from './WebsiteFooter.module.css';
import { Link } from 'gatsby';
import Navbar from '../navbar/Navbar';

export default function WebsiteFooter() {
    return (
        <div className={styles.footer}>
            <Navbar className={styles.footerNav} />
            <span className={styles.footNote}>Designed & built by Andy Li</span>
        </div>
    );
}
