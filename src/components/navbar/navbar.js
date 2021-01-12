import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'gatsby';

export default function Navbar() {
    return (
        <div className={styles.navBar}>
            <Link to="/" className={styles.navItems}>
                Home
            </Link>
            <Link to="/contact/" className={styles.navItems}>
                Contact
            </Link>
            <Link to="/portfolio/" className={styles.navItems}>
                Portfolio
            </Link>
        </div>
    );
}

// export default navbar;
