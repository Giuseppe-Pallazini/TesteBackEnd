import { Router } from 'express'
const server = Router();

import { PrizeBreak, PrizeBreakFastest } from '../repository/dadosRepository.js'


server.get('/prizeBreak', async (req, resp) => {
  try {
    const maxIntervalConsecutive = await PrizeBreak();
    const twoFastestPrize = await PrizeBreakFastest();
    
    // Organizar os dados em um objeto com a estrutura desejada
    const data = {
        min: maxIntervalConsecutive,
        max: twoFastestPrize
    };

    resp.send(data)

  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});

export default server;