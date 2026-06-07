const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Chat = require('./models/chat');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Working route');
});
app.get('/chats', async (req, res) => {
    let chats = await Chat.find();
    res.render('index.ejs', { chats });
});
app.get('/chats/new',(req,res)=>{
    res.render('new.ejs');
});
app.post('/chats',async (req,res)=>{
    let {from,to,msg} = req.body;
    let chat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    await chat.save();
    res.redirect('/chats');
});
app.get('/chats/:id/edit', async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render('edit.ejs', { chat });
});
app.put('/chats/:id', async (req, res) => {
    let { id } = req.params;
    let { msg } = req.body;
    let chat = await Chat.findByIdAndUpdate(id, { msg }, {runValidators: true , new: true});
    // console.log(chat);
    res.redirect('/chats');
});
app.delete('/chats/:id', async (req, res) => {
    let { id } = req.params;
    
    await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});