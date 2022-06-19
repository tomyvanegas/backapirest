const BarbershopController = {};
const Barber = require('../BarberShop.json')

BarbershopController.getAll = (req,res)=>{
    //logica para listar todos los cursos
    res.json(Barber);
}
BarbershopController.create = (req,res)=>{
    //logica para crear un nuevo objeto
    const id= Barber.length+1;
    const newbarber = req.body;
    newbarber["id"]= id; 
    Barber.push(newbarber);
    res.json(newbarber);
}
BarbershopController.update = (req,res)=>{
    //logica para actualizar un curso
    res.json({"mensaje":"objeto actualizado"});
}
BarbershopController.delete = (req,res)=>{
    //logica para eliminar
    res.json({"mensaje":"objeto eliminado"});
}


module.exports = BarbershopController
