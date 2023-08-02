import { con } from './connection.js'


export async function PrizeBreak(){
    const comando =`
    SELECT
    producer,
    IF(COUNT(*) > 1, MAX(dt_movie) - MIN(dt_movie), 0) AS intervalo,
    MIN(dt_movie) AS previousWin,
    MAX(dt_movie) AS followingWin
FROM
    (
        SELECT
            nm_producer AS producer,
            dt_movie
        FROM
            tb_movie AS m1
            INNER JOIN tb_producer AS p ON m1.id_producer = p.id_producer
        WHERE
            m1.bl_win = 1
    ) AS intervals
GROUP BY
    producer
ORDER BY
    intervalo DESC`


const [linhas] = await con.query(comando);
return [linhas];
}

export async function PrizeBreakFastest() {
    const comando =`
    SELECT
    producer,
    IF(COUNT(*) > 1, MAX(dt_movie) - MIN(dt_movie), 0) AS intervalo,
    MIN(dt_movie) AS previousWin,
    MAX(dt_movie) AS followingWin
FROM
    (
        SELECT
            nm_producer AS producer,
            dt_movie
        FROM
            tb_movie AS m1
            INNER JOIN tb_producer AS p ON m1.id_producer = p.id_producer
        WHERE
            m1.bl_win = 1
    ) AS intervals
GROUP BY
    producer
ORDER BY
    intervalo;`


const [linhas] = await con.query(comando);
return [linhas];
}
