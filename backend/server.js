import express from 'express';
import cors from 'cors';
// mongoDB Connection
import { connectDB } from './config/db.js';
// Router Connection
import foodRouter from './routes/foodRoute.js';

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);

app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
