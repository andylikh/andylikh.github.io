import React from "react"
import Header from "../components/header"
import Grid from "../components/grid/grid"
import { Link } from "gatsby"
import Navbar from "../components/navbar/navbar"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Navbar/>
      <Header headerText="Hi I'm Andy" />
      <p>This is a list of my projects</p>
      <Grid/>
    </div>
  )
}
