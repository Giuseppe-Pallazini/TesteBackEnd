// import { functionProducer } from '../repository/producerRepository.js';

import { Router } from 'express'
const server = Router();


server.post('/insert/producer', async (req, resp) => {
    try{
        const { nameProducer } = req.body;
        const result = await functionProducer(nameProducer)
        resp.send(result)
    }catch(err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
        console.log(err)
    }
});


server.post('/insert/titulo', async (req, resp) => {
    try{
        const { title } = req.body;
        const result = await titulo(title)
        resp.send(result)
    }catch(err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
        console.log(err)
    }
});


server.post('/insert/studio', async (req, resp) => {
    try{
        const { studio } = req.body;
        const result = await functionStudio(studio)
        resp.send(result)
    }catch(err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
        console.log(err)
    }
});


server.post('/insert/producer', async (req, resp) => {
    try{
        const { producer } = req.body;
        const result = await produtor(producer)
        resp.send(result)
    }catch(err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
        console.log(err)
    }
});

server.post('/insert/winner', async (req, resp) => {
    try{
        let { winner, numeroWinner, dateWin } = req.body;
        if (winner === "yes") 
            winner = true;
        else
            winner = false;  
        const result = await functionWinner(winner, numeroWinner, dateWin)
        resp.send(result)
    }catch(err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
    }
});

server.get('/listarMaisGanhou', async (req,resp) => {
    try {
        const resposta = await ListarMaisGanhou();
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        })
    }
});

export default server;