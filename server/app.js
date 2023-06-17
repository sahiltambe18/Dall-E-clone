import express from "express";
import * as dotenv from "dotenv";
import cors from 'cors';


import connectDB from './data/database.js'; 
import postRoutes from './routes/post.routes.js';
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use("/api/post",postRoutes);
app.use("/api/dalle",dalleRoutes);

app.get("/",(req,res)=>{
    res.send("Hello From AI DALL-E")
});

const port = process.env.PORT ? process.env.PORT : 5000 ;

const startServer = async ()=>{
    try {
        connectDB(process.env.MONGODB_URI);
        app.listen(port , ()=>{console.log(`server is live at http://localhost:${port}`)});
    } catch (error) {
        console.log(error)
    }
}

startServer();