import React from 'react';
import styles from "./Grid.module.css";
import projects from '../../projects.json'

const Grid = () => {
  return (
    <div className ={styles.grid}>
      {projects.projects.map((projectJson)=>(
        <Card
          name = {projectJson.projectName}
          link = {projectJson.url}
          logo = {projectJson.logo}
          description =  {projectJson.description}
        />
      ))}
    </div>
  );
};


const Card = ({name, logo, link, description}) =>{
  return(
    <div className = {styles.projectCard}>
      <a href={link}>
        <h2> {name} </h2>
        <img src = {logo} alt = {description}/>
      </a>
    </div>
  )

}

export default Grid;
