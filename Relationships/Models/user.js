const mongoose = require('mongoose');
const { Schema } = mongoose;
main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
const userSchema=new Schema({
    username:String,
    addresses:[
        {
            _id: false,
            location: String,
            city: String
        },
    ],
});
const User = mongoose.model('User', userSchema);

const addUsers=async()=>{
    let user1=new User({
        username:'John Doe',
        addresses: [
            {
                location: '123 Main St',
                city: 'New York'
            },
            {
                location: '456 Elm St',
                city: 'San Francisco'
            }
        ],
    });
    user1.addresses.push({
        location: '789 Oak St',
        city: 'Seattle'
    });
    const result=await user1.save();
    console.log(result);
}

addUsers();