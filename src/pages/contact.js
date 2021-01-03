import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar/Navbar"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Navbar/>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  )
}