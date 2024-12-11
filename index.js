const express = require('express');
const app = express();

// Hardcoded secret key (intentional vulnerability)
const secretKey = "123456";

app.get('/', (req, res) => {
    res.send('Welcome to the app!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
