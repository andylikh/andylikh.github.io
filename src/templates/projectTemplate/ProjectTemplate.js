import React from 'react';
import { graphql } from 'gatsby';
import styles from './Template.module.css';
import Navbar from '../../components/navbar/Navbar';
import ProjectHeader from '../../components/projectHeader/ProjectHeader';

export default function Template({
    data // this prop will be injected by the GraphQL query below.
}) {
    const { frontmatter, html } = data.markdownRemark;
    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            <ProjectHeader
                heroImage={frontmatter.heroImage}
                title={frontmatter.title}
                tags={frontmatter.description}
            />
            {/* <div className={styles.blogpostContainer}>
                <div className="blog-post">
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }} <=== do i need this??
                    />
                </div>
            </div> */}
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
            }
        }
    }
`;
