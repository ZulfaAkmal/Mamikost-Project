import express from "express";
import cors from "cors";
import kostRoutes from "./routes/kostRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/kosts", kostRoutes);
app.use("/api/inquiries", inquiryRoutes);

export default app;
