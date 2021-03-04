import React from 'react';
import { graphql } from 'gatsby';
import styles from './ProjectTemplate.module.css';
import Navbar from '../../components/navbar/Navbar';
import ProjectHeader from '../../components/projectHeader/ProjectHeader';
import ProjectFooter from '../../components/projectFooter/ProjectFooter';

export default function Template({
    data // this prop will be injected by the GraphQL query below.
}) {
    const { frontmatter, html } = data.markdownRemark;
    console.log(frontmatter);
    return (
        <div>
            <div className={styles.pageWrapper}>
                <ProjectHeader
                    heroImage={frontmatter.heroImage}
                    title={frontmatter.title}
                    tags={frontmatter.description}
                    summary={frontmatter.summary}
                    learnings={frontmatter.learnings}
                    role={frontmatter.role}
                    duration={frontmatter.duration}
                    skills={frontmatter.skills}
                />
                <div
                    className={styles.projectContent}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
            <ProjectFooter />
        </div>
    );
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                description
                heroImage
                summary
                learnings
                role
                duration
                skills
            }
        }
    }
`;
