import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const PORT = process.env.PORT;
export const JWT_TOKEN = process.env.JWT_TOKEN!;
