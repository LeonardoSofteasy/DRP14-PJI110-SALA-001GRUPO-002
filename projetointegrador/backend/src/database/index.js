import  Sequelize, { json } from 'sequelize';
import databaseConfig from '../config/Database'
import usuario from '../app/models/usuario';
import cliente from '../app/models/cliente';


const models=[
                usuario,
                cliente
            ];
class DatabaseIndex{
    constructor(){
        this.init()
    }
    init(){
        this.connection = new Sequelize(databaseConfig);
        models.map(model=>model.init(this.connection))
    }
}

export default new DatabaseIndex();