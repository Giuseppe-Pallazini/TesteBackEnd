import { con } from './connection.js'



export default class ProducerRepository {

    async insert(producer) {
        const comando = `insert into tb_producer (nm_producer)
                                     values 		 (?)`
        
        const [linhas] = await con.query(comando, [producer.name]);
        return linhas[0];
    }
    }

