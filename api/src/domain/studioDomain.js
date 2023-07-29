import StudioRepository from "../repository/studioRepository.js";
const studioRepository = new StudioRepository()


export default class StudioDomain {

       async insert(studio) {
            await studioRepository.insert(studio);
       } 
}