import React from 'react';
import styles from "./Grid2.module.css";
import { useStaticQuery, graphql } from "gatsby"

export default function Grid2 () {
const data = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            date
            slug
            title
            logo
          }
        }
      }
    }
  }
  
  `)

  return (
    <>
    {/* NOTES */}
    {/*console.log(data.allMarkdownRemark.edges.nodes.frontmatter.title)/* <-- this doesn't work at all */}
    {console.log(data.allMarkdownRemark.edges.nodes)/* <-- this shows as undefined */}
    {console.log(data.allMarkdownRemark.edges)/*<--this works*/}

    <div className={styles.grid}>
      {data.allMarkdownRemark.edges.map((gQLdata)=>(
        <Card2
        name = {gQLdata.node.frontmatter.title}
        link = {gQLdata.node.frontmatter.slug}
        logo = {gQLdata.node.frontmatter.logo}
        description = {gQLdata.node.frontmatter.date}
        />
      ))}
    </div>
    </>
  )
}

const Card2 = ({name, logo, link, description, imgAlt}) =>{
  return(
    <div className = {styles.projectCard}>
      <a href={link}>
        <h2> {name} </h2>
        <img src = {logo} alt = {imgAlt}/>
        <p>{description}</p>
      </a>
    </div>
  )
}

