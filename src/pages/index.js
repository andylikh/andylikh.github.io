import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { graphql } from 'gatsby';
import ProjectGrid from '../components/projectGrid/ProjectGrid';
import Title from '../components/title/Title';

export default function Home({ data }) {
    return (
        <div style={{ color: `purple` }}>
            <Navbar />
            <Title
                header={data.site.siteMetadata.title}
                subHeader={data.site.siteMetadata.description}
            />
            <ProjectGrid />
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
