import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcryptjs'

class usuario extends Model{
    static init(sequelize){
        super.init({                  
              nome:Sequelize.STRING ,                            
              email: Sequelize.STRING ,                              
              password: Sequelize.VIRTUAL ,                              
              password_hash: Sequelize.STRING ,   
              username:Sequelize.STRING , 
              trocasenha:Sequelize.INTEGER , 
        },
        {
            sequelize,
        })
        this.addHook('beforeSave',async (user)=>{
            if(user.password){
                user.password_hash=await bcrypt.hash(user.password,8)             
            } 

        })

        return this;
    }
    checkpassword(password){
        return bcrypt.compare(password,this.password_hash)
    }
}
export default usuario;