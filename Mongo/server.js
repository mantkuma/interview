const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

// MongoDB connection URL with username and password
const username = "mantosh";
const password = "mantosh";
const host = "localhost";
const port = 27017;
const dbName = "test";

const url = `mongodb://${username}:${password}@${host}:${port}/${dbName}`;
let db;

// Create a new MongoClient
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the server
client.connect((err) => {
  if (err) {
    console.error("Failed to connect to the database. Exiting now...", err);
    process.exit();
  }
  console.log("Connected successfully to database");
  db = client.db(dbName);
});

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Get all documents from a collection
app.get("/documents", async (req, res) => {
  try {
    const collection = db.collection("customers");
    const documents = await collection.find({}).toArray();
    res.status(200).json(documents);
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching documents" });
  }
});

// Add a new document to the collection
app.post("/documents", async (req, res) => {
  try {
    const newDocument = req.body;
    const collection = db.collection("customers");
    const result = await collection.insertOne(newDocument);
    res.status(201).json(result.ops[0]);
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occurred while adding the document" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
