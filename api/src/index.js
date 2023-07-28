import 'dotenv/config'
import express from 'express';
import cors from 'cors';

import fs from 'fs';
import csv from 'csv-parser'

const server = express();
server.use(cors());
server.use(express.json());

const results = [];

fs.createReadStream('movielist.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });

server.listen(process.env.PORT, () => console.log(`API conectada na Porta ${process.env.PORT}`))