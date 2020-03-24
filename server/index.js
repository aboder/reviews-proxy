const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 3000;

const PUBLIC_DIR = path.join(__dirname, '..', '/public');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.use('/', (req, res) => {
  //route to other service servers
});

app.listen(PORT, console.log(`Listening on port: ${PORT}`));
