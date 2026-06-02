const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/register', (req, res) => {
    let {username,password} = req.query;
    res.send('Standard GET request, Welcome ' + username + '!');
});

app.post('/register', (req, res) => {
    // console.log(req.body);
    let {username,password} = req.body;
    res.send('Standard POST request, Welcome ' + username + '!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});