const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

//Routes
const { emailRoute } = require('./routes/email');

const public = path.join(__dirname, "../public");
const html = path.join(public, "index.html");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(public));

//use routes
app.use('/email', emailRoute)

app.get('*', (req, res) => {
  res.sendFile(html)
})

app.listen(port, () => {
  console.info(`Express Server Running on Port: ${port}`);
})
