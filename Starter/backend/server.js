const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // LISÄTTY: Ladataan cors-paketti
require('dotenv').config();

//const pagesRouter = require('./routes/pages');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

// ─── TODO: Write the connectToDatabase function ──────────────────────────────
async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn("MONGODB_URI is missing. Create a .env file in backend/ before testing database features.");
    return;
  }

  try {
    await mongoose.connect(uri, { dbName: 'blog' });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
}

app.locals.publicDir = publicDir;

// LISÄTTY: Sallitaan CORS-liikenne kaikista osoitteista (tärkeä Web Servicelle)
app.use(cors()); 
app.use(express.json());
app.use(express.static(publicDir));

//app.use('/', pagesRouter);
app.use('/api/posts', postsRouter);

// 404 - Reittiä ei löydy (MUOKATTU: Palautetaan JSON-viesti tiedoston sijaan)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', message: `Route ${req.originalUrl} not found.` });
});

// 500 - Palvelinvirhe (MUOKATTU: Estetään ohjelman kaatuminen, jos 500.html puuttuu)
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: 'Internal Server Error', message: error.message });
});

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('Mounted routers:');
    console.log('  /api/posts -> routes/posts.js');
  });
});