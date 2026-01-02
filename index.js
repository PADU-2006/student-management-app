const express = require('express');
const app = express();

const studentRoutes = require('./routes/studentRoutes');

app.use(express.json());

// Mount router 👇 THIS WAS MISSING
app.use('/students', studentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});