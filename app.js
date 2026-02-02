const express = require('express');
const app = express();
const productsRouter = require('./routes/products');

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/products', productsRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});