const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// A simple route for the root of your backend
app.get('/', (req, res) => {
  res.send('Welcome to Real Estate SaaS Backend!');
});

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}`);
});

