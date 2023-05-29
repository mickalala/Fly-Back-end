import { db } from "../databaseConnection/database.connection.js";

export async function getCitiesDB() {
    const allCities = db.query(`SELECT * FROM cities;`)
    return allCities
}

export async function getCitiesByIdDB({ id }) {

    const result = await db.query(`SELECT * FROM cities WHERE id=$1;`, [id])
    return result
}
