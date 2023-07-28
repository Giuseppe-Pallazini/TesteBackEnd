import { con } from './connection.js'

export async function year(dataPremio) {
    const comando = `insert into tb_year (dt_year)
                                 values	     (?)`
    
    const [linhas] = await con.query(comando, [dataPremio]);
    return linhas[0];
}


export async function titulo(nomeTitulo) {
    const comando = `insert into tb_titulo (nm_titulo)
                                 values         (?) `
    
    const [linhas] = await con.query(comando, [nomeTitulo]);
    return linhas[0];
}


export async function studio(nomeStudio) {
    const comando = `insert into tb_studio (nm_studio)
                                 values	       (?)`
    
    const [linhas] = await con.query(comando, [nomeStudio]);
    return linhas[0];
}


export async function produtor(nomeProdutor) {
    const comando = `insert into tb_producer (nm_producer)
                                 values 		 (?)`
    
    const [linhas] = await con.query(comando, [nomeProdutor]);
    return linhas[0];
}


export async function winner(dataPremio, IdProdutor) {
    const comando = `insert into tb_winner (bl_winner, id_produtor)
                                     values 		(?, ?)`
    
    const [linhas] = await con.query(comando, [dataPremio, IdProdutor]);
    return linhas[0];
}