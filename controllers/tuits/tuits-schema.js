import mongoose from 'mongoose';

const schema = mongoose.Schema({
    description: String,
    likes: Number,
    liked: Boolean,
    retuits: Number,
    dislikes: Number,
    replies: Number,
    image: String,
    handle: String,
    userName: String,
    time: String,

}, {collection: 'tuits'});

export default schema;