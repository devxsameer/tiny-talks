# 💬 TinyTalks

> _Where small messages make big noise._

TinyTalks is a simple message board app built with **Node.js**, **Express**, and **EJS**.  
Users can post, view, and delete short messages that appear instantly on the homepage.  
It’s a lightweight and fun project that explores **routing**, **templating**, and **form handling** in Express — part of **The Odin Project** curriculum.

---

## 🌐 Live Demo

TinyTalks is live! 🎉  
Check it out here:  
👉 **[tiny-talks.onrender.com](https://tiny-talks.onrender.com/)**

> Post a message, view it, or delete it — because every tiny talk deserves a stage 💬

---

## 🚀 Features

- 📝 Post short messages with your name and text
- 👀 View individual messages on their own page
- 🗑️ Delete messages (instant satisfaction)
- 🕒 Formatted timestamps using **date-fns**
- ⚙️ Clean EJS templating and organized Express routing
- 🎨 Minimal yet modern UI with pure CSS and Google Fonts

---

## 🧩 Tech Stack

| Category  | Tech                                |
| --------- | ----------------------------------- |
| Backend   | Node.js, Express                    |
| Frontend  | EJS (Embedded JavaScript Templates) |
| Styling   | CSS (custom)                        |
| Utilities | date-fns, uuid                      |

---

## 📁 Project Structure

```
TINY-TALKS/
├── public/
│   └── styles.css
├── routes/
│   └── indexRouter.js
├── views/
│   ├── index.ejs
│   ├── form.ejs
│   ├── message.ejs
│   ├── 404.ejs
│   └── partials/
│       ├── head.ejs
│       └── header.ejs
│       └── footer.ejs
├── app.js
├── package.json
└── README.md

```

---

## ⚡ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/devxsameer/tiny-talks.git
cd tiny-talks
```

### 2. Clone the repo

```bash
pnpm install
# or
npm install
```

### 3. Run the app

```bash
pnpm start
# or
npm run start
```

### 4. Open in your browser

```
http://localhost:6969
```

---

## 🧠 Learning Goals

- Practice setting up Express routes and middleware
- Use EJS for server-side rendering
- Handle POST requests and form data
- Implement dynamic routes (for individual messages)
- Explore date formatting and in-memory data management

---

## 🧑‍💻 Author

Made with &hearts; by Sameer Ali

---
