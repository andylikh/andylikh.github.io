import { useStaticQuery, graphql } from 'gatsby';

export default function useProjectsQuery() {
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

    const projects = data?.allMarkdownRemark?.nodes
        ?.sort(
            (firstProject, secondProject) =>
                new Date(secondProject.frontmatter.date) -
                new Date(firstProject.frontmatter.date)
        )
        .map(({ frontmatter = {} }) => frontmatter);

    return projects;
}
