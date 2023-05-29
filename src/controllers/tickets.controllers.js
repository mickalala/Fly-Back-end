import { getTicketsDB } from "../repositories/tickets.Repository.js";
export async function getTickets(req, res) {
    const {id}= req.body
    try {
        const { rows: allTickets } = await getTicketsDB(id)

        res.status(200).send(allTickets);

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getTicketsById(req, res) {
    const { id } = req.params
    try {

        const { rows: city } = await getCitiesByIdDB(req.params)
        res.status(200).send(city)
    } catch (err) {
        res.status(500).send(err.message)
    }
}