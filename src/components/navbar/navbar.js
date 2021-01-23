import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'gatsby';

export default function Navbar() {
    return (
        <nav className={styles.navBar}>
            <Link to="/" className={styles.navItems}>
                Portfolio
            </Link>
            <Link to="/contact/" className={styles.navItems}>
                CV
            </Link>
        </nav>
    );
}

// export default navbar;
