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

        // Insere o data no fim do array 
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

    // data.? <- Puxa os dados do CSV

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

    //* Envia os Studios ao DB, a Domain faz a validação e retorna o ID pra ser jogado na tb_movie
    await studioDomain.insert(studio);
    const resultStudio = await studioDomain.consultID(studio);
    const studioId = resultStudio[0].id_studio;
    movie.id_studio = studioId;


    //* Envia os Producers ao DB, a Domain faz a validação e retorna o ID pra ser jogado na tb_movie
    await producerDomain.insert(producer);
    const result = await producerDomain.consultID(producer);
    const producerId = result[0].id_producer;
    movie.id_producer = producerId;

    await movieDomain.insert(movie);
  }

} 