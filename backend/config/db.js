import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://MonikaSM:Monika_1009@cluster0.tmuic.mongodb.net/food-delivery')
    .then(()=>console.log("DB Connected"))
}