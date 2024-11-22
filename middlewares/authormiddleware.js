const {Author} = require("../db/index")

function adminMiddleware(req, res, next){
    const authorname = req.headers.authorname;
    const password = req.headers.password;

    Author.findOne({
        authorname,
        password
    })
    .then((value) => {
        if(value){
            next();
        } else {
            res.status(403).json({
                msg: "Unauthorized Access"
            })
        }
    })
}

module.exports = adminMiddleware;