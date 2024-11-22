const {Router} = require("express");
const router = Router();
const userMiddleware = require("../middlewares/usermiddleware");
const { User, Books } = require("../db");

router.post("/signup", (req, res) => {
    //Signup User
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    User.create({
        username,
        email,
        password
    })
    res.json({
        msg: "User created successfully"
    })
})

router.get("/books", async (req, res) => {
    //Get all books present
    const books = await Books.find({})
    res.json({
        books
    })
})

router.post("/books/:bookId",userMiddleware, async (req, res) => {
    //purchase a book
    const bookId = req.params.bookId
    const username = req.headers.username

    await User.updateOne({
        username
    },{
        "$push": {
            purchesBook: bookId
        }
    })
    res.json({
        msg: "Purched Complete"
    })
})

router.get("/purchedbooks",userMiddleware, async (req, res) => {
    //Get the purchase books details
    const user = await User.findOne({
        username: req.headers.username
    })

    const books = await Books.find({
        _id: {
            "$in": user.purchesBook
        }
    })
    res.json({
        books
    })
})

module.exports = router;