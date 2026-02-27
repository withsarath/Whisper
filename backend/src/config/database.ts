import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.DATABASE_URI;
    if(!uri){
      throw new Error("Missing required env var: DATABASE_URI")
    }
    await mongoose.connect(uri);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Error in connecting Database:", error);
    process.exit(1)
  }
};
