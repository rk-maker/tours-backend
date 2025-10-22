import { Router } from "express";
import { signup, login } from "../controllers/auth";
import { errorHandlers } from "../error-handlers";

const authRoutes: Router = Router();

authRoutes.post("/signup", errorHandlers(signup));
authRoutes.post("/login", errorHandlers(login));

export default authRoutes;
