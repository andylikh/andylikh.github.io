import React from 'react';
import styles from './ProjectFooter.module.css';
import { Link } from 'gatsby';
import ProjectGrid from '../ProjectGrid/ProjectGrid';

export default function ProjectFooter() {
    return (
        <div className={styles.footerWrapper}>
            <h4>See more</h4>
            <Link to="/" className={styles.returnHome}>
                return to hompage
            </Link>
        </div>
    );
}
