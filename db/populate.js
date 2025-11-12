import { Client } from "pg";
import "dotenv/config";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function populateDB() {
  try {
    console.log("🗄️ Connecting to database...");
    await client.connect();

    // Drop table if it exists (for fresh runs)
    await client.query(`DROP TABLE IF EXISTS messages;`);

    // Create messages table
    await client.query(`
      CREATE TABLE messages (
        id SERIAL PRIMARY KEY,
        user_name VARCHAR(100) NOT NULL,
        text TEXT NOT NULL,
        added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Table 'messages' created successfully.");

    // Insert sample data
    await client.query(`
      INSERT INTO messages (user_name, text)
      VALUES 
        ('Amando', 'Hi there!'),
        ('Charles', 'Hello World!'),
        ('System', 'TinyTalks now runs on PostgreSQL 🚀');
    `);

    console.log("🌱 Sample data inserted.");
  } catch (err) {
    console.error("❌ Error populating database:", err);
  } finally {
    await client.end();
    console.log("🔌 Connection closed.");
  }
}

populateDB();
