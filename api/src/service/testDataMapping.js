import fs from 'fs';
import csv from 'csv-parser';

import VerifySameProducerDomain from '../domain/sameProducerDomain.js';
import VerifySameProducerRepository from '../repository/sameProducerRepository.js';
import ProducerDomain from '../domain/producerDomain.js';
import StudioDomain from '../domain/studioDomain.js';
import MovieDomain from '../domain/movieDomain.js';
const verifySameProducerDomain = new VerifySameProducerDomain();
const verifySameProducerRepository = new VerifySameProducerRepository()

const movieDomain = new MovieDomain();
const producerDomain = new ProducerDomain();
const studioDomain = new StudioDomain();

// console.log(await verifySameProducerRepository.insert(producer));
// await verifySameProducerDomain.insert(producer)

// if((await verifySameProducerRepository.insert(producer)).length > 0) {
//   // Não executa 
//   console.log('Não executa')
// } else {
//   // Executa
//   console.log('Executa')
// }

export default async function teste() {

  fs.createReadStream('movielist.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', async (data) => {
      try {

        const producer = {
          name: data.producers
        }
        
        await producerDomain.insert(producer);
        console.log(await verifySameProducerRepository.insert(producer));

      } catch (error) {
        console.error('Erro ao enviar os dados:', error);
      }
    })
    .on('end', () => {
      console.log('Envio de dados concluído.');
    });

}