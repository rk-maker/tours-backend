import { Router } from "express";
import { addTours, getTours } from "../controllers/tours";
import { errorHandlers } from "../error-handlers";
import authMiddleware from "../middleware/auth";
import { operator } from "../middleware/operator";

const toursRouts: Router = Router();

toursRouts.post("/add", [authMiddleware, operator], errorHandlers(addTours));
toursRouts.get("/", errorHandlers(getTours));
export default toursRouts;
