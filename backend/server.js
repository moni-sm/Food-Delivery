import 'dotenv/config'
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

const app = express()
const port = process.env.PORT || 4000;

// ✅ Proper CORS (ONLY THIS, nothing else)
app.use(cors({
    origin: ["https://food-delivery-eta-lilac.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "token"],
    credentials: true
}));

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// DB Connection
connectDB();

// Routes
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

// Test route
app.get("/", (req, res) => {
    res.send("API Working")
})

// Server start
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})