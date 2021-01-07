import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar/Navbar';
import { graphql } from 'gatsby';

export default function Home({ data }) {
    return (
        <div style={{ color: `purple` }}>
            <Navbar />
            <Header headerText="Hello Gatsby!" />
            <p>What a world.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
            <h1>{data.site.siteMetadata.title}</h1>
            <h2>{data.site.siteMetadata.description}</h2>
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
