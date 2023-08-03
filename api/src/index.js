import 'dotenv/config';

import importDataCsv  from './service/dataMapping.js';
await importDataCsv();

import PrizeBreak  from './controller/dadosController.js';

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());


server.use(PrizeBreak);


server.listen(process.env.PORT, () => console.log(`API conectada na Porta ${process.env.PORT}`));