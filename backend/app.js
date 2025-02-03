const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', noteRoutes);

module.exports = app;