import { Router } from "express";
import authRoutes from "./auth";
import toursRouts from "./tours";
const rootRouter: Router = Router();

rootRouter.use("/auth", authRoutes);
rootRouter.use("/tours", toursRouts);

export default rootRouter;
