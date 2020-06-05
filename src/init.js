import "./db";
import app from "./app";
import dotenv from "dotenv";
import "./models/Post";
dotenv.config();

const PORT = process.env.PORT || 2000;

const handleListening = () =>
  console.log(`😻LISTENING ON: https://localhost:${PORT}`);

app.listen(PORT, handleListening);
