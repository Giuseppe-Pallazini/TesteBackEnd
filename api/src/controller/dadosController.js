import { year, studio, produtor, titulo, winner } from '../repository/dadosRepository.js'

import { Router } from 'express'
const server = Router();

import fs from 'fs';
import csv from 'csv-parser';
import axios from 'axios'

const results = [];

// fs.createReadStream('movielist.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log(results);
//   });

const years = [];
const titles = [];
const studios = [];
const producers = [];
const winners = [];

fs.createReadStream('movielist.csv')
  .pipe(csv())
  .on('data', (data) => {
    years.push(data.year);
    titles.push(data.title);
    studios.push(data.studios);
    producers.push(data.producers);
    winners.push(data.winner);
  })
  .on('end', () => {
    console.log('Years:', years);
    console.log('Titles:', titles);
    console.log('Studios:', studios);
    console.log('Producers:', producers);
    console.log('Winners:', winners);

    // Fazer a requisição POST para a API com os dados de cada coluna
    axios.post('http://localhost:5000/insert/year', years)
      .then((response) => {
        console.log('Dados de years enviados com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados de years:', error);
      });

    axios.post('http://localhost:5000/insert/titulo', titles)
      .then((response) => {
        console.log('Dados de titles enviados com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados de titles:', error);
      });

    axios.post('http://localhost:5000/insert/studio', studios)
      .then((response) => {
        console.log('Dados de studios enviados com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados de studios:', error);
      });

    axios.post('http://localhost:5000/insert/producer', producers)
      .then((response) => {
        console.log('Dados de producers enviados com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados de producers:', error);
      });

    axios.post('http://localhost:5000/insert/winner', winners)
      .then((response) => {
        console.log('Dados de winners enviados com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados de winners:', error);
      });
  });


server.post('/insert/year', async (req, resp) => {
    try{
        const { ano } = req.body;
        const result = await year(ano)
        resp.send(result)
    }catch(err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
        console.log(err)
    }
})


server.post('/insert/titulo', async (req, resp) => {
    try{
        const { nome } = req.body;
        const result = await titulo(nome)
        resp.send(result)
    }catch(err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
        console.log(err)
    }
})


server.post('/insert/studio', async (req, resp) => {
    try{
        const { nomeEstudio } = req.body;
        const result = await studio(nomeEstudio)
        resp.send(result)
    }catch(err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
        console.log(err)
    }
})


server.post('/insert/producer', async (req, resp) => {
    try{
        const { nomeProducer } = req.body;
        const result = await produtor(nomeProducer)
        resp.send(result)
    }catch(err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
        console.log(err)
    }
})

server.post('/insert/winner', async (req, resp) => {
    try{
        let { winnerYN, numeroWinner } = req.body;
        if (winnerYN === "yes") 
            winnerYN = true;
        else
            winnerYN = false;     
        const result = await winner(winnerYN, numeroWinner)
        resp.send(result)
    }catch(err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
    }
})

export default server;