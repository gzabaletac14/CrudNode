const express =  require('express');
const path = require('path');
const morgan = require('morgan');

//initializations
const app = express();

//setting
//configuramos el puerto del server
app.set('port', process.env.PORT || 3000); 

//middlewares
app.use(morgan('dev'));  //escuchar las peticiones y mostrarlas por consola
//para que la aplicacion pueda entender json en las peticiones
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/api/Employees',require('./Routes/Employees_Router.js'));


module.exports = app;