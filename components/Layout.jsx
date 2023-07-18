import { useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"


function Layout({children},props) {
  
  return (
    <div>
        <Navbar data={props}/>
         {children}
        <Footer/>
    </div>
  )
}

export default Layout