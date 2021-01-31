import React from 'react';
import styles from './ProjectGrid.module.css';
import { useStaticQuery, graphql } from 'gatsby';

export default function ProjectGrid() {
    const data = useStaticQuery(graphql`
        query ProjectQuery {
            allMarkdownRemark {
                totalCount
                nodes {
                    frontmatter {
                        date
                        slug
                        title
                        logo
                        image
                        description
                    }
                }
            }
        }
    `);

    const projects = data?.allMarkdownRemark?.nodes?.sort(
        (firstProject, secondProject) =>
            new Date(secondProject.frontmatter.date) -
            new Date(firstProject.frontmatter.date)
    );
    return (
        <div className={styles.grid}>
            {projects?.map((gQLdata) => {
                const {
                    title,
                    slug,
                    logo,
                    description,
                    image
                } = gQLdata.frontmatter;
                return (
                    <ProjectCard
                        name={title}
                        link={slug}
                        logo={logo}
                        description={description}
                        featuredImage={image}
                    />
                );
            })}
        </div>
    );
}

const ProjectCard = ({
    name,
    logo,
    link,
    description,
    imgAlt,
    featuredImage
}) => {
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
                <h2> {name} </h2>
                <p>{description}</p>
            </div>
        </a>
    );
};
