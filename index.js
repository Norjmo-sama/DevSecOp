const express = require('express');
const app = express();

const email = "m_pritchard@mail.fhsu.edu"
console.log(email);
// Hardcoded secret key (intentional vulnerability)
const password = "123456";
console.log(password);


app.get('/', (req, res) => {
    res.send('Welcome to the app!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
