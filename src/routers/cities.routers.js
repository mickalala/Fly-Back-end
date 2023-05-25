import { Router } from "express";
import { getCities,getCityById } from "../controllers/cities.controllers.js";

const citiesRouter=Router();

citiesRouter.get("/cities", getCities)
citiesRouter.get("/cities/:id",getCityById)

export default citiesRouter;