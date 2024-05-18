'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('clientes', { 
        id: {
          type:Sequelize.INTEGER ,
          allowNull:false,
          autoIncrement:true,
          primaryKey:true,
        },
        nome: {
          type:Sequelize.STRING ,
          allowNull:true,
               },
        endereco: {
          type:Sequelize.STRING ,
          allowNull:true,
          
        },
        cep: {
          type:Sequelize.STRING ,
          allowNull:true,
        },
      
        cidade: {
          type:Sequelize.STRING ,
          allowNull:true,
        },
        contato: {
          type:Sequelize.STRING ,
          allowNull:true,
        },
        cargo: {
          type:Sequelize.STRING ,
          allowNull:true,
        },
        email: {
          type:Sequelize.STRING ,
          allowNull:true,
        },
        obs: {
          type:Sequelize.STRING ,
          allowNull:true,
        },
        website: {
          type:Sequelize.STRING ,
          allowNull:true,
        },
        maps: {
          type:Sequelize.STRING ,
          allowNull:true,
        },
        createdAt:{
          type:Sequelize.DATE ,
          allowNull:false,
        }  ,

        updatedAt:{
          type:Sequelize.DATE ,
          allowNull:false,
        }  
      });
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('clientes');
   
  }
};
