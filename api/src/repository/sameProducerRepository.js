import { con } from '../repository/connection.js'



export default class VerifySameProducerRepository {

    async insert(producer) {
        const comando = 
        `SELECT *
            FROM tb_producer 
        WHERE nm_producer = ?`
        const [linhas] = con.query(comando, [producer.name]);
        return linhas[0]
    }
}