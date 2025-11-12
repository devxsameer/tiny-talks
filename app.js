// app.js

import "dotenv/config";

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/indexRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 6969;

// Set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🗨️  TinyTalks running at http://localhost:${PORT}`);
});
