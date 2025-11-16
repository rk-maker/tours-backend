import { Router } from "express";
import { errorHandlers } from "../error-handlers";
import {
  addBookings,
  deleteBooking,
  getAllBookings,
  updateBooking,
} from "../controllers/bookings";
import authMiddleWare from "../middleware/auth";
import { customer } from "../middleware/customer";

const bookingRoutes: Router = Router();
bookingRoutes.post("/", [authMiddleWare, customer], errorHandlers(addBookings));
bookingRoutes.get(
  "/",
  [authMiddleWare, customer],
  errorHandlers(getAllBookings)
);
bookingRoutes.put(
  "/:id",
  [authMiddleWare, customer],
  errorHandlers(updateBooking)
);
bookingRoutes.delete(
  "/:id",
  [authMiddleWare, customer],
  errorHandlers(deleteBooking)
);

export default bookingRoutes;
