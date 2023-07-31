import VerifySameProducerRepository from "../repository/sameProducerRepository.js";
const verifySameProducer = new VerifySameProducerRepository()


export default class VerifySameProducerDomain{

    async insert(producer) {
        await verifySameProducer.insert(producer)
    }
}


