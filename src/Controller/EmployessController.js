const employeesctrl = {} // creamos un objeto 

const employeeSchema = require('../Models/Employees');

employeesctrl.getAllEmployees = async (req, res) =>
{
    const result = await employeeSchema.find().sort({createdAt: -1}).lean();
    res.json(result);
};
employeesctrl.createEmployees = async (req, res) => 
{
    const newEmployees = new employeeSchema(req.body);
    const result = await  employeeSchema.findOne({identificacion: newEmployees.identificacion})
    if(result == null)
    {
        await newEmployees.save();
        res.status(200).send({message:'Usuario registrado con exito'});
    } else 
    {            
        res.status(500).send({message:'Usuario ya se encuentra registrado.'})  
    }
};
employeesctrl.getEmployees = async (req, res) =>
{
    const result = await  employeeSchema.findOne({_id:req.params.id})
    res.json(result);

};
employeesctrl.editEmployees = async (req, res) =>
{  
    await employeeSchema.findByIdAndUpdate(req.params.id,req.body,
    (err, empleadoUpdated) => {
        if(err) res.status(500).send({message: `Error al actualizar la empleado: ${err}`})  
        res.status(200).send({empleadoUpdated })
        })
};
employeesctrl.deleteEmployees = async (req, res) => 
{
        await  employeeSchema.findOneAndDelete({_id:req.params.id})
        
};

//exportamos el objeto
module.exports = employeesctrl;
