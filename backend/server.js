const path = require('path');
const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;
const frontendDistDir = path.resolve(__dirname, '../solution/frontend/dist');
const frontendEntryFile = path.join(frontendDistDir, 'index.html');
const hasFrontendBuild = fs.existsSync(frontendEntryFile);

async function connectToDatabase() {
  if (!process.env.MONGODB_URI) {
    console.warn('MONGODB_URI is missing. Create a .env file in backend/ before testing database features.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'blog' });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
}

app.use(express.json());

app.use('/api/posts', postsRouter);

if (hasFrontendBuild) {
  app.use(express.static(frontendDistDir));
}

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }

  if (!hasFrontendBuild) {
    return res.status(404).json({
      message: 'Frontend build not found. Run "npm run build" in frontend/solution to enable SPA hosting from Express.',
    });
  }

  return res.sendFile(frontendEntryFile);
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  return res.status(500).json({ message: 'Internal server error' });
});

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('  /api/posts -> routes/posts.js');
    console.log(
      hasFrontendBuild
        ? `  SPA frontend -> ${frontendDistDir}`
        : '  SPA frontend -> build missing (run "npm run build" in frontend/solution)',
    );
  });
});