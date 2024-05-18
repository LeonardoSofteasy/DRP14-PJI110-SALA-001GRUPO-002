import {Router} from 'express';
import usuario_controle from './app/controllers/usuario_controle';
import sessao from './app/controllers/sessao_controle';
import middleware_autenticacao from './app/middlewares/middleware_autenticacao';
import cliente_controle from './app/controllers/cliente_controle';


const routes=new Router();


routes.post('/sessao',sessao.grava)
//routes.use(middleware_autenticacao)
routes.get('/usuario',usuario_controle.listar)
routes.get('/usuario/:id',usuario_controle.listarum)
routes.post('/usuario',usuario_controle.insere)
routes.put('/usuario/:id',usuario_controle.atualiza)
routes.put('/usuario/delete/:id',usuario_controle.deleta)
routes.get('/cliente',cliente_controle.listar)
routes.get('/cliente/:id',cliente_controle.listarum)
routes.post('/cliente',cliente_controle.insere)
routes.put('/cliente/:id',cliente_controle.atualiza)
routes.put('/cliente/delete/:id',cliente_controle.deleta)

export default routes