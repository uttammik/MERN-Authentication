import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDB.js"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"

const PORT = process.env.PORT||6000
const app = express() 

// app.get("/", (req, res)=>{
//     return res.json({message : "Server Started"})
// })

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview", interviewRouter)

// app.listen(PORT, ()=>{
//     console.log(`Server running on port ${PORT}`)
//     connectDb()
// })
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Database connection failed:", err);
});