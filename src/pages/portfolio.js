import React from "react"
import Header from "../components/header"
import Grid from "../components/grid/grid"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="Hi I'm Andy" />
      <p>This is a list of my projects</p>
      <Grid/>
    </div>
  )
}
