import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useState } from "react"
import { useSelector } from "react-redux"
import Link from "next/link"
export default function Navbar() {
  const quantity=useSelector((state)=>state.cart.quantity)
  const [click,setClick]=useState(false)
  return (
    
    <div className={styles.container}>
    {click&&<div className={styles.navmobile}>
         <ul className={styles.listsmall}>
         <li className={styles.listitem} onClick={()=>{setClick(false)}}>Back</li>
         <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <li className={styles.listitem}>Products</li>
          <li className={styles.listitem}>Menu</li>
          <li className={styles.listitem}>Events</li>
          <li className={styles.listitem}>Blog</li>
          <li className={styles.listitem}>Contact</li>
         </ul>
    </div>}  
  
      <div className={styles.item}>
      
      <div className={styles.callbutton}>
        <Image src='/Images/images.png' alt='' width='30' height='30'/>
        </div>
       <div className={styles.texts}>
        <div className={styles.text}>
          ORDER NOW
        </div>
        <div className={styles.text}>
         9988776679
        </div>
       </div>
       </div>
       
       <div className={styles.item}>
         <ul className={styles.list}>
         
          <li className={styles.listitem}>Home</li>
          <li className={styles.listitem}>Products</li>
          <li className={styles.listitem}>Menu</li>
          <li className={styles.listitem}>Events</li>
          <li className={styles.listitem}>Blog</li>
          <li className={styles.listitem}>Contact</li>
         </ul>
        </div>
        <div className={styles.item}>
        <Link href='/cart'>
        <div className={styles.cart}>
          <Image src="/Images/cart.png" alt='' width='25' height='25'/>
          <div className={styles.counter}>{quantity}</div>
          </div>
        </Link>
        
        </div>
        </div>

  )
}
