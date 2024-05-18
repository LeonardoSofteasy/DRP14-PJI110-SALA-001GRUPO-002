import * as yup from 'yup'
import usuario from "../models/usuario";


class usuario_controle{
    async listar(req,res){
            const usuarios=await usuario.findAll()
            return res.json({usuarios})
    }
    async listarum(req,res){
        const id=req.params['id']
        const usuarios=await usuario.findByPk(id)
        return res.json(usuarios)
    }
    
    async insere(req,res){
        console.log(req.body)
        const esquema=yup.object().shape(
            {
                nome:yup.string().required() ,                            
                email: yup.string().email().required(),                              
                password: yup.string().required().min(6) ,                              
                username:yup.string().required() ,    
                trocasenha:yup.number()              
                
            }
        );
        if(!(await esquema.isValid(req.body))){
          return  res.status(400).json({
                error:"falha na validação"
            });
        }

    /*    const email_cadastrado=await usuario.findOne({where:{email:req.body.email}})
   //     const username_cadastrado=await usuario.findOne({where:{username:req.body.username}})
        if(email_cadastrado){
            return res.status(400).json({error:'o email já esta sendo utilizado'})
        }      
        if(username_cadastrado){
            return res.status(400).json({error:'esse nome de usuario ja esta sendo utilizado'})
        }*/
        const usuarios=await usuario.create(req.body)
        return res.json(usuarios)
    }
    async atualiza(req,res){
        
        const esquema=yup.object().shape(
            {
                nome:yup.string(),                            
                email: yup.string().email(),                              
                oldpassword: yup.string().min(6) ,                              
                password: yup.string().min(6).when('oldpassword', (oldpassword,field)=>
                    oldpassword?field.required():field
                ),
                confirmpassword:yup.string().when('password',(password,field)=>
                    password? field.required().oneOf([yup.ref('password')]):field
                ),                              
                username:yup.string() ,
                trocasenha:yup.number()                
               
            }
        ); 
        if(!(await esquema.isValid(req.body))){
            return res.status(400).json({
                error:"falha na validação"
                
            });
        }
        const {email, username, oldpassword}=req.body
        const att_usuario=await usuario.findByPk(req.params.id)
        if(email&&email!== att_usuario.email){
            const email_cadastrado=await usuario.findOne({where:{email}})
            if(email_cadastrado){
                return res.status(400).json({error:'o email já esta sendo utilizado'})
            }
        }
        if(username&&username!== att_usuario.username){
            const username_cadastrado=await usuario.findOne({where:{username}})
            if(username_cadastrado){
                return res.status(400).json({error:'o nome de usuario já esta sendo utilizado'})
            }
        }
       
        if(oldpassword && !(await att_usuario.checkpassword(oldpassword))){
            return res.status(401).json({error:'senha não confere'})
        }
        const usuarioatualizado=await att_usuario.update(req.body)
        return res.json(usuarioatualizado)

    }
    async deleta(req,res){
        const id=req.params['id']
        const usuarios=await usuario.destroy(
            {
                 where:
                 {
                    id:id
                 }
                })
        return res.json(usuarios)
    }
}
export default new usuario_controle();