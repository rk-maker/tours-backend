import { Router } from "express";
import { signup, login, me } from "../controllers/auth";
import { errorHandlers } from "../error-handlers";
import authMiddleWare from "../middleware/auth";

const authRoutes: Router = Router();

authRoutes.post("/signup", errorHandlers(signup));
authRoutes.post("/login", errorHandlers(login));
authRoutes.get("/me", [authMiddleWare], errorHandlers(me));

export default authRoutes;
