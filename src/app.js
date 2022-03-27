import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productRoute from './routes/product'
import mongoose from 'mongoose';

const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use("/api",productRoute);

mongoose.connect("mongodb://localhost:27017/web16309")
.then(()=>console.log("Connect db successfully"))
.catch(error=>console.log(error))
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running port:${PORT}`)
})