import express from "express";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/auth.message.js";
import cors from "cors";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import path from "path";

import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

app;

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
  });
}

server.listen(PORT || 5000, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectDB();
});
