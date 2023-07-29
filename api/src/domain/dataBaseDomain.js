import DataBaseRepository from "../repository/dataBaseRepository.js";
const dataBaseRepository = new DataBaseRepository()


export default class DataBaseDomain {

    async killDB() {

        await dataBaseRepository.killDB()

    }
}