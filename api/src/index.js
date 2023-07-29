import 'dotenv/config';
import teste  from './service/dataMapping.js';
import DataBaseDomain from './domain/dataBaseDomain.js';
await teste();

// Criando uma instância da classe importada
const dataBaseDomain = new DataBaseDomain();

import aa from './controller/dadosController.js';

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

// configuração dos endpoints
server.use(aa);

server.listen(process.env.PORT, () => console.log(`API conectada na Porta ${process.env.PORT}`));

process.on('exit', () => dataBaseDomain.killDB());

process.on ('SIGINT', () => dataBaseDomain.killDB()); 

process.on ('SIGTERM', () => dataBaseDomain.killDB());
