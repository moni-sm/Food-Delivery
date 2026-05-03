import mongoose from "mongoose"

export const connectDB = async ()=>{
    const dbUri = process.env.Mongo_DB;
    await mongoose.connect(dbUri)
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.error("DB Connection Error:", err.message));
}