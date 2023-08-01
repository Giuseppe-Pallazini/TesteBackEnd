import { con } from './connection.js'



export default class ProducerRepository {

    async insert(producer) {
        const comando = `insert into tb_producer (nm_producer)
                                    values 		 (?)`
        con.beginTransaction()
        const linhas = await con.query(comando, [producer.name]);
        con.commit()
        return linhas;
    }

    async consultByName(name) {
        const comando = 
        `SELECT SQL_NO_CACHE COUNT(*) as count
        FROM tb_producer 
        WHERE nm_producer = ?`
        const linhas = await con.execute(comando, [name]);
        console.log(linhas[0]);
        return linhas[0];
    }
}
