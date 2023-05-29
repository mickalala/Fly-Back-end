import { Router } from "express";
import { getTickets } from "../controllers/tickets.controllers.js";

const flightsRouter= Router();

flightsRouter.get("/cityTickets",getTickets)
flightsRouter.get("/ticket/:id")

export default flightsRouter;