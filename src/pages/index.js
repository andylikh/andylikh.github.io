import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { graphql } from 'gatsby';
import ProjectGrid from '../components/projectGrid/ProjectGrid';

import styles from './index.module.css';

export default function Home({ data }) {
    return (
        <div className={styles.wholeBody}>
            <div className={styles.pageWrapper}>
                <Navbar />
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <h1 className={styles.headerTitle}>
                            Hello my name is{' '}
                            <strong className={styles.header.titlebold}>
                                Andy Li 👋
                            </strong>
                        </h1>
                        <p className={styles.headerDescription}>
                            This is my portfolio!
                        </p>
                    </div>
                    <div>
                        <img
                            src="./images/hs_no_bg.png"
                            alt="Andy's mug shot"
                            className={styles.headShot}
                        />
                    </div>
                </div>
                <h1 className={styles.headerTitle}> Work </h1>
                <ProjectGrid />
                <div className={`${styles.shape1} ${styles.allShapes}`}></div>
                <div className={`${styles.shape2} ${styles.allShapes}`}></div>
                <div className={`${styles.shape3} ${styles.allShapes}`}></div>
                <div className={`${styles.shape4} ${styles.allShapes}`}></div>
                <div className={`${styles.shape5} ${styles.allShapes}`}></div>
                <div className={`${styles.shape6} ${styles.allShapes}`}></div>
            </div>
        </div>
    );
}

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                description
                title
            }
        }
    }
`;
