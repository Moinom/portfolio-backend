import express from 'express';
import cors from 'cors';
import artRoutes from './routes/artRoutes';
import codeRoutes from './routes/codeRoutes';

const PORT = 8000;
const app = express();

app.use(cors());
app.use('/art', artRoutes);
app.use('/code', codeRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;
