import { con } from './connection.js'


export default class MovieRepository {

    async insert(movie) {
        const comando = `insert into tb_movie (nm_title, dt_movie, bl_win, id_producer, id_studio)
                                     values	     (?, ?, ?, ?, ?)`
        
        const linhas = await con.query(comando, [movie.name, movie.date, movie.win, movie.id_producer, movie.id_studio]);
        return linhas[0];
    }
}
