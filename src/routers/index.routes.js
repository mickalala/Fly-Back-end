import { Router } from "express";
import citiesRouter from "./cities.routers.js";
import flightsRouter from "./flights.routers.js";
import hotelsRouter from "./hotels.routers.js";

const indexRouter= Router();

indexRouter.use(citiesRouter)
indexRouter.use(flightsRouter)
indexRouter.use(hotelsRouter)

export default indexRouter;