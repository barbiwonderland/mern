const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, }
);
const connection = mongoose.connection;
connection.once('open', () =>
{
    console.log("MongoDB database connection established successfully");
});

const usersRouter = require('./routes/user');


app.use('/users', usersRouter);

app.listen(process.env.PORT || 8000, () =>
{
    console.log(`Server is running on port: ${port}`);
});