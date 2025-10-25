import { Router } from "express";
import { addTours } from "../controllers/tours";
import { errorHandlers } from "../error-handlers";
import authMessage from "../middleware/auth";

const toursRouts: Router = Router();

toursRouts.post("/add", errorHandlers(addTours));

export default toursRouts;
