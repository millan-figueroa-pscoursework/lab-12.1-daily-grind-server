const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();

const port = 3000;

// Route for the homepage, sends index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for /contact sends contact.html
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// GET route at the path /api/fun-fact
app.get("/api/fun-fact", async (req, res) => {
  try {
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    );

    return res.json({
      fact: response.data.text,
    });
  } catch (error) {
    console.error("Error fetching fun fact:", error.message);
    return res.status(500).json({
      error: "Could not fetch fun fact",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
