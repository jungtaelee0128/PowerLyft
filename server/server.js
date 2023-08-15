const express = require('express');
const app = express();
const path = require('path');
console.log('hi');
console.log(path.join(__dirname, '../client/index.html'))

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  });
  
  app.listen(3000); //listens on port 3000 -> http://localhost:3000/