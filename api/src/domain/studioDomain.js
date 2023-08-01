import StudioRepository from "../repository/studioRepository.js";
const studioRepository = new StudioRepository()

import VerifySameStudio from "../repository/studioRepository.js";
const verifySameStudio = new VerifySameStudio()


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
}