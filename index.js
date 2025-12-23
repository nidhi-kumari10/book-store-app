import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"
import cors from 'cors';


const app = express();

dotenv.config();

// middleware
app.use(cors({
  origin:"*",
  credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT || 4000;
const  URI = process.env.MongoDBURI;

// connect to mongodb

try{
    mongoose.connect(URI);
    console.log("Connected to Database");
}catch(error){
    console.log("Error", error);
}

app.use("/book", bookRoute);
app.use("/user",userRoute);


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})