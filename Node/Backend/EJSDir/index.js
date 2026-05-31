const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Set the directory for EJS templates

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.render('home.ejs');
});
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});