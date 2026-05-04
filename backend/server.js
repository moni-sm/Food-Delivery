import 'dotenv/config'
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// app config
const app = express()
const port = process.env.PORT || 4000;


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Update CORS to allow your Vercel frontend
const allowedOrigins = [
  "https://food-delivery-eta-lilac.vercel.app",
  "https://food-delivery-admin-moni.vercel.app", // assuming this is your admin URL based on typical patterns
  "http://localhost:5173", // for local development
  "http://localhost:5174"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token"]
}));

// Handle preflight requests
app.options('*', cors());

//DB Connection
connectDB();

// api end-point
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://MonikaSM:Monika_1009@cluster0.tmuic.mongodb.net/?