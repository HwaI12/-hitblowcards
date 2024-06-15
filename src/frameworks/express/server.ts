import express from 'express';
import gameRoutes from './routes/gameRoutes';
import { errorHandler } from '../../../src/adapters/middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/api/game', gameRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
