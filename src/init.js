import dotenv from "dotenv";
import app from "./app";

const PORT = process.env.PORT || 2000;

const handleListening = () =>
  console.log(`😻LISTENING ON: https://localhost:${PORT}`);

app.listen(PORT, handleListening);
