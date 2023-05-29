import { db } from "../databaseConnection/database.connection.js";
import { getCitiesByIdDB, getCitiesDB } from "../repositories/cities.Repository.js";

export async function getCities(req, res) {
    try {
        const { rows: allCities } = await getCitiesDB()

        res.status(200).send(allCities);

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCityById(req, res) {
    const { id } = req.params
    try {

        const { rows: city } = await getCitiesByIdDB(req.params)
        res.status(200).send(city)
    } catch (err) {
        res.status(500).send(err.message)
    }
}