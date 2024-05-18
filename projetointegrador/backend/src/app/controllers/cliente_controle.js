import * as yup from 'yup'
import cliente from "../models/cliente";


class cliente_controle{
    async listar(req,res){
        const {pagina=1}=req.query
        const limite=10
        var u_pagina=1;
        const qtd_cli=await cliente.count()
      
        if (qtd_cli!==0){
            u_pagina=Math.ceil(qtd_cli/limite)
        }else{
            const clientes=await cliente.findAll({
                order:[['nome','ASC']]
            })
            return res.json({clientes})
        }
        const clientes=await cliente.findAll({
            order:[['nome','ASC']],
            offset: Number((pagina*limite)-limite),
            limit:limite
        })
        if (cliente){
            var paginacao={
                path:'/cliente',
                pagina:Number(pagina),
                pag_ant:Number(pagina-1)>=1?Number(pagina-1):false,
                pag_nex:Number(pagina)+1>=u_pagina?u_pagina:Number(pagina)+1,
                qtd_tot:qtd_cli

            }
           
            return res.json({clientes,paginacao})
        }
        
       
       
    }
    async listarum(req,res){
        const id=req.params['id']
        const clientes=await cliente.findByPk(id)
        return res.json(clientes)
    }
    async insere(req,res){
        const esquema=yup.object().shape(
            {
                nome:yup.string() ,
                endereco:yup.string() ,
                cep:yup.string() ,
                cidade:yup.string() ,
                contato:yup.string() ,
                cargo:yup.string() ,
                obs:yup.string() ,
                email:yup.string() ,
                website:yup.string() ,                
                maps:yup.string() ,              
                
            }
        );
        if(!(await esquema.isValid(req.body))){
          return  res.status(400).json({
                error:"falha na validação"
            });
        }
        const clientes=await cliente.create(req.body)
        return res.json(clientes)
    }
    async atualiza(req,res){
        const esquema=yup.object().shape(
            {
                nome:yup.string() ,
                endereco:yup.string() ,
                cep:yup.string() ,
                cidade:yup.string() ,
                contato:yup.string() ,
                cargo:yup.string() ,
                email:yup.string() ,
                obs:yup.string() ,
                website:yup.string() ,                
                maps:yup.string() ,             
               
            }
        ); 
        if(!(await esquema.isValid(req.body))){
            return res.status(400).json({
                error:"falha na validação"
                
            });
        }  

        const clienteatualizado=await cliente.update(
            req.body,
            {
                where:
                {
                    id:req.params['id']
                }
            }
            )
        return res.json(req.body)

    }
    async deleta(req,res){
        const id=req.params['id']
        const clientes=await cliente.destroy(
            {
                 where:
                 {
                    id:id
                 }
                })
        return res.json(clientes)
    }
}
export default new cliente_controle();