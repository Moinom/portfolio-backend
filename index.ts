import express from "express";
import cors from "cors";
import artRoutes from "./routes/artRoutes";
import codeRoutes from "./routes/codeRoutes";
import * as dotenv from "dotenv";
import NodeCache from "node-cache"

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
// 43200 seconds = 12 hours
const secondsToCacheReset = 43200;
export const cache = new NodeCache({stdTTL: secondsToCacheReset});

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
