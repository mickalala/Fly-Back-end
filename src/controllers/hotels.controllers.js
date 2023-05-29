import { getHotelsDB } from "../repositories/hotels.Repository.js";
export async function getHotels(req, res) {
    const { id } = req.body
    try {
        const { rows: allHotels } = await getHotelsDB(id)

        res.status(200).send(allHotels);

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getHotelsById(req, res) {

    try {

        const { rows: city } = await getCitiesByIdDB(req.params)
        res.status(200).send(city)
    } catch (err) {
        res.status(500).send(err.message)
    }
}