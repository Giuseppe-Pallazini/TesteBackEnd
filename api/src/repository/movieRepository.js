import { con } from './connection.js'


export default class MovieRepository {

    async insert(movie) {
        const comando = `insert into tb_movie (nm_title, dt_movie, bl_win, id_producer)
                                     values	     (?, ?, ?, ?)`
        
        const [linhas] = await con.query(comando, [movie.name, movie.date, movie.win, movie.idProducer]);
        return linhas[0];
    }
}
