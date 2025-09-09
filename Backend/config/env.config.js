import { config } from "dotenv";
config({ path: ".env" });

export const {
  PORT,
  DATABASE_URL,
  JSON_WEB_TOKEN_SECRET,
  JSON_WEB_TOKEN_EXPIRES_IN,
} = process.env;
