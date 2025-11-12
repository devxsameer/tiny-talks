# 💬 TinyTalks

> _Where small messages make big noise._

TinyTalks is a simple message board app built with **Node.js**, **Express**, **EJS**, and **PostgreSQL**.  
Users can post, view, and delete short messages that appear instantly on the homepage.  
It’s a lightweight and fun project built as part of **The Odin Project**, focusing on routing, templating, and connecting an Express app to a live database.

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
- 🕒 Persistent storage powered by **PostgreSQL**
- ⚙️ Clean and modular **Express** routing
- 🖼️ Dynamic views rendered with **EJS**
- 🎨 Minimal, modern UI styled with pure **CSS** and **Google Fonts**

---

## 🧩 Tech Stack

| Category  | Tech                                |
| --------- | ----------------------------------- |
| Backend   | Node.js, Express                    |
| Frontend  | EJS (Embedded JavaScript Templates) |
| Database  | PostgreSQL (hosted on Neon)         |
| Hosting   | Render                              |
| Utilities | date-fns, dotenv, pg                |

---

## 📁 Project Structure

```
TINY-TALKS/
├── public/
│   └── styles.css
├── db/
│   ├── pool.js
│   └── populate.js
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
├── .env
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

### 3. Set up environment variables

Create a `.env` file in the project root and add your Neon connection string:

```
DATABASE_URL=postgresql://<username>:<password>@<your-neon-host>/<database>?sslmode=require

```

### 4. Populate the database

Run the populate script to create the `messages` table and seed sample data:

```bash
pnpm run populate-db
# or
npm run populate-db

```

### 5. Run the app

```bash
pnpm start
# or
npm run start
```

### 6. Open in your browser

```
http://localhost:6969
```

---

## 🧠 Learning Goals

- Practice setting up Express routes and middleware
- Use EJS for server-side rendering
- Handle POST requests and form data
- Implement dynamic routes (for individual messages)
- Connect an Express app to a PostgreSQL database
- Deploy a full-stack Node app to Render
- Manage environment variables securely with dotenv

---

## ☁️ Deployment

Deployed on Render, connected to a Neon PostgreSQL database for persistent storage.

🌐 [tiny-talks.onrender.com](https://tiny-talks.onrender.com/)

---

## 🧑‍💻 Author

Made with &hearts; by Sameer Ali

---
