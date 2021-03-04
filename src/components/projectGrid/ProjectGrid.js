import React from 'react';
import styles from './ProjectGrid.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import useProjectsQuery from '../../queries/useProjectsQuery';

export default function ProjectGrid({ gridData }) {
    return (
        <div className={styles.grid}>
            {gridData?.map(
                ({
                    title = 'Title',
                    slug = '/',
                    logo,
                    description = 'description',
                    image
                }) => (
                    <ProjectCard
                        name={title}
                        link={slug}
                        logo={logo}
                        description={description}
                        featuredImage={image}
                    />
                )
            )}
        </div>
    );
}

function ProjectCard({ name, logo, link, description, imgAlt, featuredImage }) {
    return (
        <a href={link} className={styles.projectCard}>
            <div className={styles.overlay} />
            <img
                src={featuredImage}
                alt="feature image"
                className={styles.featuredImage}
            />
            <div className={styles.projectInfo}>
                <img src={logo} alt="prop" className={styles.logo} />
                <h2 className={styles.projectInfoH2}> {name} </h2>
                <p className={styles.projectInfoP}>{description}</p>
            </div>
        </a>
    );
}
