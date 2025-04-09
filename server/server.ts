import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./src/routes/routes";
import dotenv from "dotenv";

const app: Express = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(todoRoutes);

const PORT: string | number = process.env.PORT || 4000;

mongoose.connect('mongodb+srv://polamarasettidurgarao00008:7997@cluster0.zfnfuny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { dbName: "todo" })
  .then(() => {
    console.log("Db is connected");
  })
  .catch((e) => {
    console.log(e.message);
    console.log("DB is failed in connection");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
