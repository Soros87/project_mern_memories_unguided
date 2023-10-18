import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors()); //need to have the cors above the app.use()

app.use('/posts', postRoutes);

const PORT = process.env.PORT|| 5100;

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => {console.log(`Server Running on Port: http://localhost:${PORT}`)
  console.log("successfully connected to MongoDB Atlas")

}))
  .catch((error) => console.log(`${error} did not connect`));