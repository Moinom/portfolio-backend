import express from "express";
import cors from "cors";
import artRoutes from "./routes/artRoutes";
import codeRoutes from "./routes/codeRoutes";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/art", artRoutes);
app.use("/code", codeRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;
