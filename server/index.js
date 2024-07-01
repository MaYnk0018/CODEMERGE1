import express from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import userRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();

//Database connection
mongoose
  .connect(
    process.env.MONGODB
  )
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});


//AUTH
app.use('/server/user', userRoutes);


