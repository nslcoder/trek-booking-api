require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const trekRoutes = require('./treks/routes');
const bookingRoutes = require('./bookings/routes');

const app = express();
const port = 5000;

connectDB();

app.use(express.json());
app.use('/api/treks', trekRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(port, () => console.log(`The server is listening on port ${port}.`));
