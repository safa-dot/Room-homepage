import React from 'react'
import "./layout.css"
import  Navbar  from "../Navbar/Navbar"


function Layout(props) {
  return (
    <>
    <Navbar />
    <main>
        {props.children}
    </main>
</>
  )
}

export default Layout
