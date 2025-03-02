import express from "express";
import db from "./config/Database.js"; 
import NoteRoutes from "./routes/NoteRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", NoteRoutes);  // Pastikan endpointnya benar

// Sinkronisasi database
db.sync()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database error:", err));

app.listen(5001, () => console.log("Server running on port 5001"));
