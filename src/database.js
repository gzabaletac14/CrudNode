const mongoose = require('mongoose');

mongoose
.connect('mongodb://Localhost/Employees',{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then((db)=> console.log("Conectado a la BD"))
.catch((err) => console.log(err));