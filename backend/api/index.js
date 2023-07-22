const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const serverless = require('serverless-http');

require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
const port = process.env.PORT || 3001;

// LE DIGO A LA API QUE USE CORS
app.use(cors());
// LE DIGO A LA API QUE los datos son json
app.use(express.json());

// DATOS DE ACCESO A MONGO DB
const uri = process.env.ATLAS_URI;

// CONECCIÓN A MONGO DB
mongoose.connect(uri, { useNewUrlParser: true, }
);


const connection = mongoose.connection;
// para saber si me conecte a mongoDB
connection.once('open', () =>
{
    console.log("MongoDB database connection established successfully");
});

//RUTAS CREADAS PARA LA API
const usersRouter = require('../routes/user');
const commentsRouter = require('../routes/comment');

// LE DIGO A LA API QUE USE LAS RUTAS DECLARADAS EN EL PASO ANTERIOR
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);

// Habilitar conexión ....
const host = '0.0.0.0';
//PARA SABER EN QUE PUERTO ESTOY CONECTADO
app.listen(port, host, () =>
{
    console.log(`Server is running on port: ${port}`);
});

module.exports.handler = serverless(app);