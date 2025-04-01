import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("techerudite_db Connected");
  } catch (error) {
    console.error("database Connection Failed:", error);
    process.exit(1);
  }
};

export default connectDB;
