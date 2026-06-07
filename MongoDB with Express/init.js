const mongoose = require('mongoose');
const Chat = require('./models/chat');

main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = [
    {
        from: 'John',
        to: 'Doe',
        msg: 'Hello, how are you?',
        created_at: new Date(),
    },
    {
        from: 'Doe',
        to: 'John',
        msg: 'I am good, thanks! How about you?',
        created_at: new Date(),
    },
    {
        from: 'Alice',
        to: 'Bob',
        msg: 'Hey Bob, are you coming to the party?',
        created_at: new Date(),
    },
    {
        from: 'Bob',
        to: 'Alice',
        msg: 'Yes, I will be there! Looking forward to it.',
        created_at: new Date(),
    },
    {
        from: 'Charlie',
        to: 'Dave',
        msg: 'Did you finish the project?',
        created_at: new Date(),
    },
    {
        from: 'Dave',
        to: 'Charlie',
        msg: 'Not yet, I am still working on it.',
        created_at: new Date(),
    }
];

Chat.insertMany(chats);