const {Schema, model} = require('mongoose')

const employeesSchema = new Schema({
    identificacion:{type:String, require: true},
    nombre:{type:String, require: true},
    apellido:{type:String, require: true},
    edad:{type: Number, require:false},
    sexo:{type: String, require: true},
    departamento:{type:String, require:false},
    salario:{type:Number, require:true}
},
{
    timestamps: true,
    versionKey: false
})

module.exports = model('employees',employeesSchema)
