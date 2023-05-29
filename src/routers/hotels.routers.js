import { Router } from "express";
import { getHotels , getHotelsById} from "../controllers/hotels.controllers.js";

const hotelsRouter= Router();

hotelsRouter.get("/cityHotels",getHotels)
hotelsRouter.get("/hotel/:id", getHotelsById)

export default hotelsRouter;