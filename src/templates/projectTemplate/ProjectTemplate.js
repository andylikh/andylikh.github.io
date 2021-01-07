import React from 'react';
import { graphql } from 'gatsby';
import styles from './Template.module.css';
import Navbar from '../../components/navbar/Navbar';

export default function Template({
    data // this prop will be injected by the GraphQL query below.
}) {
    const { frontmatter, html } = data.markdownRemark;
    return (
        <>
            <Navbar />
            <div className={styles.blogpostcontainer}>
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </>
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
            }
        }
    }
`;
