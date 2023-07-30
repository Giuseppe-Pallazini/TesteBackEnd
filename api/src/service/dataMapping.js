import fs from 'fs';
import csv from 'csv-parser';
import MovieDomain from '../domain/movieDomain.js';
import ProducerDomain from '../domain/producerDomain.js';
import StudioDomain from '../domain/studioDomain.js';
import VerifySameProducerDomain from '../domain/sameProducerDomain.js';
const movieDomain              =  new MovieDomain();
const producerDomain           =  new ProducerDomain();
const studioDomain             =  new StudioDomain();
const verifySameProducerDomain =  new VerifySameProducerDomain();


export default async function teste() {

  fs.createReadStream('movielist.csv')
  .pipe(csv({ separator: ';' }))
  .on('data', async (data) => {
    try {

      if(data.winner == "yes")
        data.winner = true;
      else data.winner = false;
      const movie = {
        name: data.title,
        date: data.year,
        win:  data.winner
      }

      const producer = {
        name: data.producers
      }

      const studio = {
        name: data.studios
      }
      
    console.log(await verifySameProducerDomain.insert(producer));
    await verifySameProducerDomain.insert(producer)
    await movieDomain.insert(movie);
    await producerDomain.insert(producer);
    await studioDomain.insert(studio)
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  })
  .on('end', () => {
    console.log('Envio de dados concluído.');
  });

}