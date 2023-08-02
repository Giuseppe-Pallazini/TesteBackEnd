import StudioRepository from "../repository/studioRepository.js";
const studioRepository = new StudioRepository()

import VerifySameStudio from "../repository/studioRepository.js";
const verifySameStudio = new VerifySameStudio()

import ConsultById from '../repository/studioRepository.js';
const consultById = new ConsultById()


export default class StudioDomain {

      // Validação de duplicidade no DataBase
     async isDuplicity(name) {
          let result = await verifySameStudio.consultByName(name);
          return result[0].count > 0;
     }

     async insert(studio) {
          let resultIsDuplicity = await this.isDuplicity(studio.name);

          if(!resultIsDuplicity)
          await studioRepository.insert(studio);
     }
     
     async consultID(studio) {
          return await consultById.consultID(studio.name);
      }
}