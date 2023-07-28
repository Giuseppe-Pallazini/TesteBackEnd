import 'dotenv/config';

import aa from './controller/dadosController.js';

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());


// configuração dos endpoints
server.use(aa)

server.listen(process.env.PORT, () => console.log(`API conectada na Porta ${process.env.PORT}`))