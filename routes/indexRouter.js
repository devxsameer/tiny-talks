import { Router } from "express";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid"; // for unique IDs

const indexRouter = Router();

// In-memory message store
const messages = [
  {
    id: uuidv4(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: uuidv4(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Helper function to format dates
const formatDate = (date) => format(date, "PPpp");

// 🏠 Home page – list all messages
indexRouter.get("/", (req, res) => {
  const formattedMessages = messages.map((msg) => ({
    ...msg,
    formattedDate: formatDate(msg.added),
  }));

  res.render("index", { title: "TinyTalks", messages: formattedMessages });
});

// 🆕 Form to add a new message
indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// 📩 Handle form submission
indexRouter.post("/new", (req, res) => {
  const { user, text } = req.body;
  if (user && text) {
    messages.push({ id: uuidv4(), user, text, added: new Date() });
  }
  res.redirect("/");
});

// 👁️ View an individual message
indexRouter.get("/message/:id", (req, res) => {
  const message = messages.find((msg) => msg.id === req.params.id);
  if (!message) {
    return res.status(404).render("404", { title: "Message Not Found" });
  }
  res.render("message", {
    title: `Message by ${message.user}`,
    message: { ...message, formattedDate: formatDate(message.added) },
  });
});

// 🗑️ Delete a message
indexRouter.post("/message/:id/delete", (req, res) => {
  const index = messages.findIndex((msg) => msg.id === req.params.id);
  if (index !== -1) {
    messages.splice(index, 1);
  }
  res.redirect("/");
});

export default indexRouter;
