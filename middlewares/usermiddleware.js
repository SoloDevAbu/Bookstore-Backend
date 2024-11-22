const {User} = require("../db/index")

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username,
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

module.exports = userMiddleware;