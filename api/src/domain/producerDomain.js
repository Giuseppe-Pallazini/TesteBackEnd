import ProducerRepository  from '../repository/producerRepository.js';
const producerRepository = new ProducerRepository()

import VerifySameProducerRepository from "../repository/producerRepository.js";
const verifySameProducer = new VerifySameProducerRepository()


export default class ProducerDomain {

    async isDuplicity(name) {
        let result = await verifySameProducer.consultByName(name);
        //console.log(result)
        return result[0].count > 0;
    }

    
    async insert(producer) {
        let resultIsDuplicity = await this.isDuplicity(producer.name);
        

        if(!resultIsDuplicity) 
            await producerRepository.insert(producer);
    }

}