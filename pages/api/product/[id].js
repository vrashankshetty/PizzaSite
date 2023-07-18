import Product from '../../../models/Product'
import dbConnect from '../../../util/mongo'


export default async function handler(req,res){
    const {method}=req
    dbConnect()
    if(method=='GET'){
        try{
         const {id}=req.query
         const data=await Product.findById(id)
         res.status(201).json(data)
        }catch(e){
            res.status(404).json(e)
        }
    }
    if(method=='DELETE'){
        try{
         const {id}=req.query
         const data=await Product.findByIdAndDelete(id)
         res.status(201).json(data)
        }catch(e){
            res.status(404).json(e)
        }
    }
    if(method=='PUT'){
        try{
         const {id}=req.query
         const data=await Product.findByIdAndUpdate(id,req.body)
         res.status(201).json(data)
        }catch(e){
            res.status(404).json(e)
        }
    }


}