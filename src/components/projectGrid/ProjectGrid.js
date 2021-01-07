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
                  }
                }
              }
            }
    `);

    return (
        <div className={styles.grid}>
            {data?.allMarkdownRemark?.nodes?.map((gQLdata) => {
                const {title, slug, logo, date} = gQLdata.frontmatter;
                return (
                    <ProjectCard
                        name={title}
                        link={slug}
                        logo={logo}
                        description={date}
                    />
                );
            })}
        </div>
    );
}

const ProjectCard = ({ name, logo, link, description, imgAlt }) => {
    return (
        <div className={styles.projectCard}>
            <a href={link}>
                <h2> {name} </h2>
                <img src={logo} alt={imgAlt} />
                <p>{description}</p>
            </a>
        </div>
    );
};
