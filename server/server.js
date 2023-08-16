const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors')
console.log(path.join(__dirname, '../client/index.html'))
const port = process.env.PORT || 3000; // Use the specified port or 5000 as a default

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());

app.get('/', (req, res) => {
    console.log('omg my code is working!!!')
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});
// app.get('/exercises', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });
  
// app.listen(3000); //listens on port 3000 -> http://localhost:3000/
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
