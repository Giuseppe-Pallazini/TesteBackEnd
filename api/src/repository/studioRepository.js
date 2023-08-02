import { con } from './connection.js'


export default class StudioRepository{

    async insert(studio) {
    const comando = `insert into tb_studio (nm_studio)
                                 values	       (?)`
    
    const linhas = await con.query(comando, [studio.name]);
    return linhas[0];
    }

    async consultByName(name) {
        const comando = 
        `SELECT SQL_NO_CACHE COUNT(*) as count
        FROM tb_studio 
        WHERE nm_studio = ?`
        const linhas = await con.execute(comando, [name]);
        return linhas[0];
    }

    async consultID(name) {
        const comando = 
        `SELECT id_studio	
            FROM tb_studio 	
        WHERE nm_studio 	= ?`
        const linhas = await con.execute(comando, [name]);
        return linhas[0];
    }
}

