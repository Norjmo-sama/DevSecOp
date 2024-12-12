const express = require('express');
const app = express();

const email = "adet@fhnw.edu"
// Hardcoded secret key (intentional vulnerability)
const secretKey = "123456";
console.log(secretKey);


app.get('/', (req, res) => {
    res.send('Welcome to the app!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
