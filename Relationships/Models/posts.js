const mongoose = require('mongoose');
const { Schema } = mongoose;
main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
const userSchema = new Schema({
    username: String,
    email: String,
})
const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//     // let user1 = new User({
//     //     username: 'John Doe',
//     //     email: '2ZD0H@example.com'
//     // });
//     let user=await User.findOne({username:'John Doe'});
//     let post2 = new Post({
//         content: 'This is my second post',
//         likes: 110,
//     });
//     post2.user = user;
//     // await user1.save();
//     await post2.save();
// }

// addData();

const getData=async()=>{
    let result=await Post.find({}).populate('user','username');
    console.log(result);
}
getData();

// const del=async()=>{
//     await Post.findByIdAndDelete('6a2a45e360cd96193c2f2e0e');
//     await User.findByIdAndDelete('6a2a3b6b99ebe855f3e9e8bd');
// }

// del();