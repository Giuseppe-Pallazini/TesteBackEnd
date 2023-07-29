import ProducerRepository  from '../repository/producerRepository.js';
const producerRepository = new ProducerRepository()



export default class ProducerDomain {

    async insert(producer) {

        await producerRepository.insert(producer);
    }
}