import express from "express";
import cors from "cors";
import kostRoutes from "./routes/kostRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/kosts", kostRoutes);

export default app;