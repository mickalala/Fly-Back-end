import { db } from "../databaseConnection/database.connection.js";

export async function getCities(req, res) {
    try {
        const { rows: allCities } = db.query(`SELECT * FROM cities;`)

        res.status(200).send(allCities);

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCityById(req, res) {
    const { id } = req.params
    try{

    }catch(err){
        res.status(500).send(err.message)
    }
}