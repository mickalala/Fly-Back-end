import { db } from "../databaseConnection/database.connection.js";

export async function getHotelsDB(id) {

    const allHotels = await db.query(`SELECT * FROM hotels WHERE "idCity"=$1;`, [id])
    return allHotels
}

export async function getCitiesByIdDB({ id }) {

    const result = await db.query(`SELECT * FROM cities WHERE id=$1;`, [id])
    return result
}
