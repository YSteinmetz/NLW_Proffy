import express from 'express';
import routes from './routes';

import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

//GET: Buscar ou listar uma info
//POST: Criar uma nova info
//PUT: Atulaizar uma info existente
//DELETE: Deletar uma infor existente

//Corpo (Request body): Dados para ciração ou atualização de um registro
//Route params: Identificar qual recurso eu quero atualizar ou deletar
//Query params: Paginação, filtros, ordenação

app.listen(3333);
