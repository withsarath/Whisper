import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI as string);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Error in connecting Database:", error);
    process.exit(1)
  }
};
