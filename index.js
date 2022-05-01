require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const trekRoutes = require('./treks/routes');

const app = express();
const port = 5000;

connectDB();

app.use(express.json());
app.use('/api/treks', trekRoutes);

app.listen(port, () => console.log(`The server is listening on port ${port}.`));
