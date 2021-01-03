import React from "react"
import styles  from "./Navbar.module.css"
import { Link } from "gatsby"

export default function Navbar (){
   return (
    <div className = {styles.navBar}>
        <Link to="/">Home</Link>
        <Link to="/contact/">Contact</Link>
        <Link to="/portfolio/">Portfolio</Link>
        <Link to="/markdown/">Markdown</Link>
    </div>
    )

}

// export default navbar;



