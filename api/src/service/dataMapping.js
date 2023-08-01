import fs from 'fs';
import csv from 'csv-parser';
import MovieDomain from '../domain/movieDomain.js';
import ProducerDomain from '../domain/producerDomain.js';
import StudioDomain from '../domain/studioDomain.js';
const movieDomain = new MovieDomain();
const producerDomain = new ProducerDomain();
const studioDomain = new StudioDomain();

let linesCSV = [];

export default async function importDataCsv() {
  fs.createReadStream('movielist.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', async (data) => {
      try {
        linesCSV.push(data);
      } catch (error) {
        console.error('Erro ao enviar os dados:', error);
      }
    })
    .on('end', async () => {
      await importData();
      console.log('Dados Incluidos com sucesso!');
    });
}

async function importData() {
  console.log('Enviando Dados...');
  for (const data of linesCSV) {
    const producer = {
      name: data.producers
    }

    const movie = {
      name: data.title,
      date: data.year,
      win: data.winner == 'yes'
    }

    const studio = {
      name: data.studios
    }

    //console.log(await producerDomain.consult(producer))

    await producerDomain.insert(producer)
    await movieDomain.insert(movie);
    await studioDomain.insert(studio);
  }
 
} 