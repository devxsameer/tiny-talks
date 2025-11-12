import { Router } from "express";
import { format } from "date-fns";
import pool from "../db/pool.js";

const indexRouter = Router();

// Helper function to format dates
const formatDate = (date) => format(new Date(date), "PPpp");

// 🏠 Home page – list all messages
indexRouter.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, user_name, text, added FROM messages ORDER BY added DESC;"
    );
    const messages = result.rows.map((msg) => ({
      ...msg,
      formattedDate: formatDate(msg.added),
    }));
    res.render("index", { title: "TinyTalks", messages });
  } catch (err) {
    console.error("❌ Error fetching messages:", err);
    res.status(500).send("Database error");
  }
});

// 🆕 Form to add a new message
indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// 📩 Handle form submission
indexRouter.post("/new", async (req, res) => {
  const { user, text } = req.body;
  if (!user || !text) return res.redirect("/new");

  try {
    await pool.query(
      "INSERT INTO messages (user_name, text, added) VALUES ($1, $2, NOW());",
      [user, text]
    );
    res.redirect("/");
  } catch (err) {
    console.error("❌ Error inserting message:", err);
    res.status(500).send("Database error");
  }
});

// 👁️ View an individual message
indexRouter.get("/message/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM messages WHERE id = $1;", [
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).render("404", { title: "Message Not Found" });
    }

    const message = result.rows[0];
    message.formattedDate = formatDate(message.added);

    res.render("message", {
      title: `Message by ${message.user_name}`,
      message,
    });
  } catch (err) {
    console.error("❌ Error fetching message:", err);
    res.status(500).send("Database error");
  }
});

// 🗑️ Delete a message
indexRouter.post("/message/:id/delete", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM messages WHERE id = $1;", [id]);
    res.redirect("/");
  } catch (err) {
    console.error("❌ Error deleting message:", err);
    res.status(500).send("Database error");
  }
});

export default indexRouter;
