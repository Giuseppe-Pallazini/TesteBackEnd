import { con } from './connection.js'



export async function ListarMaisGanhou() {
    const comando = ``

    const [linhas] = await con.query(comando);
    return linhas;
}