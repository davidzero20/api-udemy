const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

module.exports = app;

const incidentRoutes = require('./routes/incident');

app.use("/api", incidentRoutes);