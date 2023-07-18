import styles from "../../styles/Product.module.css";
import Image from "next/image";
import Link from 'next/link'
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux'
import {addProduct} from '../../redux/cartSlice'
import axios from 'axios'
const Product = ({product}) => {
  const [price,setPrice]=useState(product.prices[0])
  const [value,setValue]=useState(0);
  const [quantity,setQuantity]=useState(1)
  const [extra,setExtra]=useState([])
  const dispatch=useDispatch()
  const handlesize=(size)=>{
     setPrice(product.prices[size])
  }
  const handleClick=()=>{
    dispatch(addProduct({...product,extra,value,price,quantity}))
  }
  const handleChange=(e,option)=>{
   const checked=e.target.checked
   if(checked){
    setValue((e)=>e+option.price)
    setExtra((prev)=>[...prev,option])
   }
   else{
    setValue((e)=>e-option.price)
    setExtra(extra.filter((e)=> e._id!==option._id))
   }
   console.log(extra)
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
        <span className={styles.price}>${value+price}</span>
        <p className={styles.desc}>{product.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={()=>handlesize(0)}>
            <Image src="/Images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handlesize(1)}>
            <Image src="/Images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() =>handlesize(2)}>
            <Image src="/Images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
        {product.extraOptions.map((option)=>{
          return(
            <div className={styles.option} key={Math.floor(Math.random()*1000)}>
              <input
              type="checkbox"
              id={option.text}
              name={option.text}
              onChange={(e)=>{handleChange(e,option)}}
              className={styles.checkbox}
            />
            <label htmlFor="double">{option.text}</label>
          </div>
          )
             
            })}
            
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity} onChange={((e)=>setQuantity(e.target.value))}/>
            <button className={styles.button} onClick={handleClick} >Add to Cart</button>
            
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context){
  const res=await axios.get(`http://localhost:3000/api/product/${context.query.id}`)
  return{
      props:{
        product:res.data,
      },
  }
}
export default Product;