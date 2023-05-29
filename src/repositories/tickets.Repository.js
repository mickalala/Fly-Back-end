import { db } from "../databaseConnection/database.connection.js";

export async function getTicketsDB(id) {

    const allTickets = await db.query(`SELECT * FROM tickets WHERE "idCity"=$1;`, [id])
    return allTickets
}