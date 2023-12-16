
const express = require('express');
const menuRoutes = require('./src/routes/menuRoute');

const app = express();
const PORT = process.env.PORT || 8000;

app.use('/api', menuRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
