import 'dotenv/config';

import importDataCsv  from './service/dataMapping.js';
await importDataCsv();

import DataBaseDomain from './domain/dataBaseDomain.js';

// Criando uma instância da classe importada ^^^^^^
const dataBaseDomain = new DataBaseDomain();

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => console.log(`API conectada na Porta ${process.env.PORT}`));

process.on('exit', () => dataBaseDomain.killDB());

process.on ('SIGINT', () => dataBaseDomain.killDB()); 

process.on ('SIGTERM', () => dataBaseDomain.killDB());
