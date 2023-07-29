import { con } from './connection.js'


export default class StudioRepository{

    async insert(studio) {
    const comando = `insert into tb_studio (nm_studio)
                                 values	       (?)`
    
    const [linhas] = await con.query(comando, [studio.name]);
    return linhas[0];
    }
}

