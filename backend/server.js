const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(bodyParser.json());
const port = process.env.PORT || 3000;

// LE DIGO A LA API QUE USE CORS
app.use(cors());
// LE DIGO A LA API QUE TRANSFORME LOS DATOS TIPO DE OBJETO A JSON
app.use(express.json());

// DATOS DE ACCESO A MONGO DB
const uri = process.env.ATLAS_URI;

// CONECCIÓN A MONGO DB
mongoose.connect(uri, { useNewUrlParser: true, }
);

// para saber si me conecte a mongoDB
const connection = mongoose.connection;
const host = '0.0.0.0';
connection.once('open', () =>
{
    console.log("MongoDB database connection established successfully");
});

//RUTAS CREADAS PARA LA API
const usersRouter = require('./routes/user');

// LE DIGO A LA API QUE USE LAS RUTAS DECLARADAS EN EL PASO ANTERIOR
app.use('/users', usersRouter);

//PARA SABER EN QUE PUERTO ESTOY CONECTADO
app.listen(port, host, () =>
{
    console.log(`Server is running on port: ${port}`);
});