const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const authorRouter = require("./routes/authorroute")
const userRouter = require("./routes/userroute");

app.use(bodyParser.json());
app.use("/author", authorRouter);
app.use("/user", userRouter);

app.listen(3000);