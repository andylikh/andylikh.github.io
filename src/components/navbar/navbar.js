import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'gatsby';

export default function Navbar({ className }) {
    return (
        <nav className={className}>
            <Link to="/" className={styles.navItems}>
                <span className={styles.emoji}>😉</span> About me
            </Link>
            <Link to="/contact/" className={styles.navItems}>
                <span className={styles.emoji}> ✏️ </span> My CV
            </Link>
            <a
                href="https://www.linkedin.com/in/andy-ka-hing-l-55601213a/"
                className={styles.navItems}>
                <span className={styles.emoji}>💼</span> Linkedin
            </a>
            <a href="mailto:andylikh106@gmail.com" className={styles.navItems}>
                <span className={styles.emoji}>💌 </span> Email me
            </a>
        </nav>
    );
}

// export default navbar;
