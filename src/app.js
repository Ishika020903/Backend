import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, // Allow credentials (cookies, authorization headers, etc.) to be sent
})) // Enable CORS for all routes

app.use(express.json({limit: "16kb"})) // Parse JSON bodies
app.use(express.urlencoded({extended: true, limit: "16kb"})) // Parse URL-encoded bodies
app.use(express.static("public")) // Serve static files from the "public" directory
app.use(cookieParser()) // Parse cookies

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter)


// http://localhost:8000/api/v1/users/register
// http://localhost:8000/api/v1/users/login
export { app }