const express = require('express');
const app = express();
const port = 3000;
// console.dir(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// app.use((req,res) => {
//     console.log('Request received');
//     // res.send({
//     //     name: 'Apple',
//     //     price: 100
//     // });
//     // res.send('Hello World');
//     let code='<h1>Hello World</h1> <p>This is a paragraph.</p>';
//     res.send(code);
// });


app.get('/', (req, res) => {
    res.send('You are on the home page');
});
app.get('/apple', (req, res) => {
    res.send('You are on the apple page');
});
app.get('/banana', (req, res) => {
    res.send('You are on the banana page');
});
app.get('/fruit', (req, res) => {
    res.send('You are on the fruit page');
});
app.post('/', (req, res) => {
    res.send('You submitted a POST request');
});
app.get('/:username/:id', (req, res) => {
    // const username = req.params.username;
    // res.send(`Hello, ${username}!`);
    // console.log(req.params);
    const { username, id } = req.params;
    let code = `<h1>Hello, ${username}!</h1><p>Your ID is ${id}.</p>`;
    // res.send(`Hello, ${username}! Your ID is ${id}.`);
    res.send(code);
});
app.get('/search', (req, res) => {
    // const query = req.query.q;
    // res.send(`You searched for: ${query}`);
    // console.log(req.query);
    // res.send('No results found');
    let {q} = req.query;
    if(!q) {
        res.send('No results found');
        return;
    }
    let code = `<h1>You searched for: ${q}</h1>`;
    res.send(code);
});
app.use((req, res) => {
    res.status(404).send('Page not found');
});
