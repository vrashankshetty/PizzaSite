import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from '../components/PizzaCard'
import { GetServerSideProps } from 'next'
import { METHODS } from 'http'
export default function PizzaList({pizzalist}) {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
    <p className={styles.desc}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
      in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit.
    </p>
    <div className={styles.wrapper}>
      
        {pizzalist.map((pizza)=>{
        return(
        <PizzaCard key={pizza._id} pizza={pizza}/>
        )
})}
    </div>
  </div>
  )
 
}
