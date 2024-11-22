const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:0ighEra5PvSAGn5n@cluster0.gblax.mongodb.net/bookStore");

const AuthorSchema = new mongoose.Schema({
    authorname: String,
    email: String,
    password: String,
    publishedBook: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books"
    }]
})

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    purchesBook: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books"
    }]
})

const BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    isbn: String,
    price: Number
})

const Author = mongoose.model("Author", AuthorSchema);
const User = mongoose.model("User", UserSchema);
const Books = mongoose.model("Books", BookSchema);

module.exports={
    Author,
    User,
    Books
}