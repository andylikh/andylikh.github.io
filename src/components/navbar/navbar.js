import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'gatsby';

export default function Navbar() {
    return (
        <nav className={styles.navBar}>
            <Link to="/" className={styles.navItems}>
                😉 About me
            </Link>
            <Link to="/contact/" className={styles.navItems}>
                ✏️ My CV
            </Link>
            <a
                href="https://www.linkedin.com/in/andy-ka-hing-l-55601213a/"
                className={styles.navItems}>
                💼 Linkedin
            </a>
            <a href="mailto:andylikh106@gmail.com" className={styles.navItems}>
                💌 Email me
            </a>
        </nav>
    );
}

// export default navbar;
