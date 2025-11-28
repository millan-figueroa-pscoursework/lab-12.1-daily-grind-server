// 1. Import the express library
const express = require("express");
const path = require("path");

// 2. Create an instance of an Express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;

// Route for the homepage, sends index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for /contact sends contact.html
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// 5. Start the server and have it listen for incoming connections
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
