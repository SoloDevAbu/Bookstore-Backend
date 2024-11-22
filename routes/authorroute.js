const {Router} = require("express");
const router = Router();
const { Author, Books } = require("../db");
const adminMiddleware = require("../middlewares/authormiddleware");
const authorMiddleware = require("../middlewares/authormiddleware");

router.post("/signup", async (req, res) => {
    //Signup Author
    const authorname = req.body.authorname
    const email = req.body.email;
    const password = req.body.password

    await Author.create({
        authorname,
        email,
        password
    })
    res.json({
        msg : "Author created successfully"
    })
})

router.post("/books", authorMiddleware, async (req, res) => {
    //Create a new book along with the total books created by author
    const title = req.body.title;
    const description = req.body.description;
    const ISBN = req.body.isbn;
    const price = req.body.price;
    const authorname = req.headers.authorname;

    const book = await Books.create({
        title,
        description,
        ISBN,
        price
    })

    await Author.updateOne({
        authorname
    }, {
        "$push": {
            publishedBook: book._id
        }
    })
    res.json({
        msg: "Book added successfully", bookId: book._id
    })
})

router.get("/books", authorMiddleware, async (req, res) => {
    //Get all the books
    const allBooks = await Books.find({});

    res.json({
        allBooks
    })
})

module.exports = router;