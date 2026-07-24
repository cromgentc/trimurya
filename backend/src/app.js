import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import apiRoutes from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: [process.env.CLIENT_URL || 'http://localhost:5173', 'http://192.168.31.242:5173'], credentials: true }));
app.use(compression());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Trimurya Corporation API is healthy' });
});

app.use('/api', apiRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;
