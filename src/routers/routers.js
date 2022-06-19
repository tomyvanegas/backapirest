const { Router} = require("express");
const router = Router();
const routeApi = '/api';
const BarbershopController = require('../controllers/BarberShop_controller')

//course
router.get(routeApi + '/BarberShop',BarbershopController.getAll)
router.post(routeApi + '/BarberShop',BarbershopController.create)
router.put(routeApi + '/BarberShop',BarbershopController.update)
router.delete(routeApi + '/BarberShop',BarbershopController.delete)


module.exports = router;