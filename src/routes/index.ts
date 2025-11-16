import { Router } from "express";
import authRoutes from "./auth";
import toursRouts from "./tours";
import { addBookings } from "../controllers/bookings";
import bookingRoutes from "./bookings";
const rootRouter: Router = Router();

rootRouter.use("/auth", authRoutes);
rootRouter.use("/tours", toursRouts);
rootRouter.use("/bookings", bookingRoutes);

export default rootRouter;
