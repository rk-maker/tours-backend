import express, { Response, Request, Express } from "express";
import { PORT } from "./sevrets";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";
import { errorMessage } from "./middleware/errors";
import { signUpSchema } from "./schema/users";

const app: Express = express();

app.use(express.json());
app.use("/api", rootRouter);

export const prismaClient = new PrismaClient({
  log: ["query"],
});
app.use(errorMessage);
app.listen(PORT, () => {
  console.log("App is workinasdadg ! fine", PORT);
});
