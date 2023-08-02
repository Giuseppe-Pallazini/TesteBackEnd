import { con } from './connection.js'



export default class ProducerRepository {

    async insert(producer) {
        const comando = `insert into tb_producer (nm_producer)
                                    values 		 (?)`
        con.beginTransaction()
        const linhas = await con.query(comando, [producer.name]);
        return linhas;
    }

    async consultByName(name) {
        const comando = 
        `SELECT SQL_NO_CACHE COUNT(*) as count
        FROM tb_producer 
        WHERE nm_producer = ?`
        const linhas = await con.execute(comando, [name]);
        return linhas[0];
    }

    async consultID(name) {
        const comando = 
        `SELECT id_producer	
            FROM tb_producer 	
        WHERE nm_producer 	= ?`
        const linhas = await con.execute(comando, [name]);
        return linhas[0];
    }
}
