import { con } from './connection.js'


export default class DataBaseRepository{


    async killDB() {
        const comando = `TRUNCATE TABLE TB_MOVIE`
        const [linhas] = await con.query(comando);
        return linhas[0];
    }    
}