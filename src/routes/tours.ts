import { Router } from "express";
import {
  addTours,
  deleteTour,
  getTourByID,
  getTours,
} from "../controllers/tours";
import { errorHandlers } from "../error-handlers";
import authMiddleware from "../middleware/auth";
import { operator } from "../middleware/operator";
import { errorMessage } from "../middleware/errors";

const toursRouts: Router = Router();

toursRouts.post("/add", [authMiddleware, operator], errorHandlers(addTours));
toursRouts.get("/", errorHandlers(getTours));
toursRouts.delete("/:id", [authMiddleware], errorHandlers(deleteTour));
toursRouts.get("/:id", [authMiddleware], errorHandlers(getTourByID));
export default toursRouts;
