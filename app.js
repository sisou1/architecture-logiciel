import express from 'express';
import indexRoutes from './routes/index.js';
import productRoutes from './routes/products.js';

const app = express();
app.use(express.json());

app.use('/', indexRoutes);
app.use('/products', productRoutes);

export default app;
