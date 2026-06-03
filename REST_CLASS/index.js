const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {id: uuidv4(), username: 'Alice', content: 'Hello, this is my first post!'},
    {id: uuidv4(), username: 'Bob', content: 'Hi everyone, nice to meet you!'},
    {id: uuidv4(), username: 'Charlie', content: 'Good morning, how are you all doing?'}
];

app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts });
});
app.get('/posts/new', (req, res) => {
    res.render('new.ejs');
});
app.post('/posts', (req, res) => {
    // console.log(req.body);
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    // res.send('Post received!');
    res.redirect('/posts');
});
app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.render('show.ejs', { post });
});
app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let { content } = req.body;
    let post = posts.find(p => p.id === id);
    // if (!post) {
    //     return res.status(404).send('Post not found');
    // }
    post.content = content;
    res.redirect('/posts');
});
app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    res.render('edit.ejs', { post });
});
app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect('/posts');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});