import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcryptjs'

class cliente extends Model{
    static init(sequelize){
        super.init( 
            {                 
            nome:Sequelize.STRING ,
            endereco:Sequelize.STRING ,
            cep:Sequelize.STRING ,
            cidade:Sequelize.STRING ,
            contato:Sequelize.STRING ,
            cargo:Sequelize.STRING ,
            email:Sequelize.STRING ,
            obs:Sequelize.STRING ,
            website:Sequelize.STRING ,                
            maps:Sequelize.STRING ,
        },
        {
            sequelize,
        })
        return this;
    }

}
export default cliente;