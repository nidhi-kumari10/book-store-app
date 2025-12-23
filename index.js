import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"
import cors from 'cors';
import path from "path";

const app = express();

dotenv.config();

// middleware
app.use(cors());
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

// deployment
if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();

  app.use(express.static(path.join(dirPath, "Frontend", "dist")));

  app.use((req, res) => {
    res.sendFile(
      path.join(dirPath, "Frontend", "dist", "index.html")
    );
  });
}

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})