const express = require('express');
const path = require('path');
var cors = require('cors')
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000; // Use the specified port or 5000 as a default

const app = express();

// app.use(express.static(path.join(__dirname, 'build')));
const CLIENT_ID = "40204467aaefb63f724d";
const CLIENT_SECRET = "1692003180c853a088318bf736bcc3c69591f339";

app.use(cors());
app.use(bodyParser.json());



// getUserData

app.get('/getUserData', async function (req, res) {
    req.get('Authorization');
    await fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
            "Authorization" : req.get("Authorization")
        }
    }).then((response) => {
        return response.json();
    }).then ((data) => {
        console.log('getUserData',data);
        res.json(data);
    })
})

app.get('/getAccessToken', async function (req, res) {
    console.log('querycode is',req.query.code);
    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + '&code=' + req.query.code;
    await fetch("https://github.com/login/oauth/access_token"+ params, {
        method: "POST",
        headers: {
            "Accept": "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then ((data) => {
        console.log(data);
        res.json(data);
    })
});

app.use(express.static(path.join(__dirname, '../build')));
console.log(path.join(__dirname, '../client/index.html'))


app.get('/', (req, res) => {
    console.log('omg my code is working!!!')
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    // return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});


app.get('*', (req, res) => {
    res.redirect('/')
    // res.sendFile(path.join(__dirname, 'index.html'));
});
// app.get('/exercises', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });
  
// app.listen(3000); //listens on port 3000 -> http://localhost:3000/
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
