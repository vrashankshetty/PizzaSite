// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Product from '../../../models/Product'
import dbConnect from '../../../util/mongo'

export default async function handler(req,res)
{
  const {method}=req;
  dbConnect()
  switch(method){
    case 'GET':{
    try{
      const products=await Product.find()
      res.status(200).json(products)
    }catch(e){
      res.status(404).json(e)
    }
    }
    case 'POST':{
      const product=new Product(req.body)
      try{
       const data= await product.save()
       res.status(200).json(data)
      }
      catch(e){
        res.status(404).json(e)
      }
    }
    case 'DELETE':{
      const r=req.body
      try{
      const data=await Product.deleteOne(r,{new:true})
      res.status(200).json(data)
      }catch(e){
      res.status(404).json(e)
      }
    }
    default:{
      res.status(404).send('No Api Calls')
    }
  }
}
