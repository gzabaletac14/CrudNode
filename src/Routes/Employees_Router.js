const Routes = require('express');

//inicializamos
const routes = Routes();
//importamos el archivo para poder usar todo los metodos del objeto
const employees = require('../Controller/EmployessController');

//api
routes.post('/NewEmployees',employees.createEmployees);
routes.get('/ListAllEmployees',employees.getAllEmployees);
routes.get('/ListEmployees/:id',employees.getEmployees);
routes.put('/EditEmployees/:id',employees.editEmployees);
routes.delete('/DeleteEmployees/:id',employees.deleteEmployees);


module.exports = routes;