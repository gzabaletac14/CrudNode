require('./database.js');
const app = require('./app.js');

//start server
app.listen(app.get('port'), () =>{
   console.log('Server corriendo en el puerto:',app.get('port'));
});


