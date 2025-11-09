import { Router } from "express";

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "TinyTalks", messages })
);
indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});
indexRouter.post("/new", (req, res) => {
  const { user, text } = req.body;
  if (user && text) {
    messages.push({ user, text, added: new Date() });
  }
  res.redirect("/");
});

export default indexRouter;
