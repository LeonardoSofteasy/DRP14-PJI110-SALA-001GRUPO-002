import jwt from "jsonwebtoken";
import usuario from "../models/usuario";
import autenticacao from "../../config/autenticacao";

class sessao_controle{
    async grava(req,res){
        let usuarioexistente
        const {email,password,username}=req.body
        console.log(req.body)
        if(username){
           usuarioexistente=await usuario.findOne({where:{username:username}})
           
        }
        if(email){
            usuarioexistente=await usuario.findOne({where:{email:email}})
        }
        if (!usuarioexistente){
            return res.status(401).json({error:'usuario nao localizado'})
         }        
        if (!password||!(await usuarioexistente.checkpassword(password))){
           return res.status(401).json({error:'senha invalida'})
        }
        const{id,nome}=usuarioexistente
        return res.json(
            {
                user:
                {
                    id,
                    nome,
                    email
                 },
                 token:jwt.sign(
                    {id},
                    autenticacao.secret,
                    {
                        expiresIn:autenticacao.expiresIn
                    })

        })
    }
}
export default new sessao_controle();