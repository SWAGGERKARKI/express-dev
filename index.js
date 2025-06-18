// import express module
import express from 'express';
// import user routes
import user from './routes/users.js';
// import mongoode module
import mongoose from 'mongoose';
// import cors module
import cors from 'cors';
// import dotenv module
import dotenv from 'dotenv';
dotenv.config();

// creatin instance of express
const app = express();

// for body parsing
app.use(express.json());
// to solve cors error
app.use(cors());
// use the user routes
app.use('/api', user);
// connect to the mongodb
mongoose
  .connect(connectionString)
  .then(() => console.log('MongoDb connected successfully'))
  .catch((err) => console.error(err));

// route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World');
  console.log('Request received at /');
});
// assign the port
const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server is running on port http://localhost:${PORT}`)
);
