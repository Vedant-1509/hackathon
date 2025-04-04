import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userroutes.js"




dotenv.config(); 

const app = express();
app.use(cors());
app.use(express.json()); 



app.use("/gratia", userRoutes);




const start = async () => {
    try {
        const connectionDb = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`✅ MONGO Connected: ${connectionDb.connection.host}`);

        app.listen(8000, () => {
            console.log("🚀 Server is running on port 8000");
        });
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1); 
    }
};

start();
