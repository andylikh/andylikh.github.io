import React from 'react';
import styles from "./grid.module.css";
import projects from '../../projects.json'
import iwocalogo from "../../images/iwocaProject1/iwocaLogoOnly.png"

const Grid = () => {
  return (
    <>
      {projects.map((projectJson)=>(
        <Card
          name = {projectJson.projectName}
          link = {projectJson.url}
          logo = {projectJson.logo}
        />
      ))}
    </>
  );
};


const Card = ({name, logo, link}) =>{
  return(
    <div className = {styles.projectCard}>
      <a href={link}>
        <h2> {name} </h2>
        <img src = {logo} alt="logo of project"/>
      </a>
    </div>
  )

}

export default Grid;
