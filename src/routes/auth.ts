import { Router } from "express";
import { signup, login, me } from "../controllers/auth";
import { errorHandlers } from "../error-handlers";
import authMessage from "../middleware/auth";

const authRoutes: Router = Router();

authRoutes.post("/signup", errorHandlers(signup));
authRoutes.post("/login", errorHandlers(login));
authRoutes.get("/me", [authMessage], errorHandlers(me));

export default authRoutes;
