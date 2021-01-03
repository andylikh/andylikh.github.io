import React from "react"
import Header from "../components/header"
import Grid from "../components/grid/Grid"
import Navbar from "../components/navbar/Navbar"
import Grid2 from "../components/grid2/Grid2"

export default function About({data}) {
  return (
    <div style={{ color: `teal` }}>
      <Navbar/>
      <Header headerText="Hi I'm Andy" />
      <p>This is a list of my projects</p>
      <Grid2/>
      <Grid/>
    </div>
  )
}

