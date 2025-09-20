import { config } from "dotenv";
config({ path: ".env" });

export const {
  PORT,
  DATABASE_URL,
  JSON_WEB_TOKEN_SECRET,
  JSON_WEB_TOKEN_EXPIRES_IN,
    FRONTEND_URL,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
} = process.env;
