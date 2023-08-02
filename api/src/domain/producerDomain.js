import ProducerRepository  from '../repository/producerRepository.js';
const producerRepository = new ProducerRepository();

import VerifySameProducerRepository from '../repository/producerRepository.js';
const verifySameProducer = new VerifySameProducerRepository();

import ConsultById from '../repository/producerRepository.js';
const consultById = new ConsultById()

export default class ProducerDomain {

    // Validação de duplicidade no DataBase
    async isDuplicity(name) {
        let result = await verifySameProducer.consultByName(name);
        return result[0].count > 0;
    }

    
    async insert(producer) {
        let resultIsDuplicity = await this.isDuplicity(producer.name);
        

        if(!resultIsDuplicity) 
            await producerRepository.insert(producer);
    }

    async consultID(producer) {
        return await consultById.consultID(producer.name);
    }

}