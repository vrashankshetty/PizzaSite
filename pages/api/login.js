import cookie from "cookie"

export default async function handler(req,res){
    if(req.method==="POST"){
        const {username,password}=req.body
        if(username===process.env.NAME && password===process.env.PASSWORD){
            res.setHeader("Set-Cookie",
            cookie.serialize("token",process.env.TOKEN,{
                maxAge:60*60,
                sameSite:"strict",
                path:"/",
            }
            ))
           res.status(200).send("Success") 
        }else{
            res.status(404).send('Failed Please Check')
        }
}
}

