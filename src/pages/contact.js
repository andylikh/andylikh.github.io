import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Navbar from "../components/navbar/navbar"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Navbar/>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  )
}