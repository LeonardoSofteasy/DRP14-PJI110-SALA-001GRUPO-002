import  Jwt  from "jsonwebtoken"
import {promisify}from 'util'

import autenticacao from "../../config/autenticacao"

export default async (req,res,next)=>{
    const authheader=req.headers.authorization
    if(!authheader){
        return res.status(401).json({error:'token expirado'})
    }

    const[, token]=authheader.split(' ')

    
   try{
        const decodificar=await promisify(Jwt.verify)(token,autenticacao.secret)
        console.log(decodificar)
        req.usuarioId=decodificar.id
        return next()
   }
   catch(error){
    return res.status(401).json({error:'token invalido'})
   }
}