const express = require('express')

const ServicioSedeController = require('../Controllers/servicioSedeController')
const { getservicioSede, servicioSedeAll, postserviciosede, updateServicioSede, eliminarServicioSede } = ServicioSedeController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

//router.get('/getserviciosede', getservicioSede)

router.get('/getserviciosede/:id', getservicioSede)
router.get('/serviciosedetodo', servicioSedeAll)
router.post('/postserviciosede', postserviciosede)
router.put('/updateserviciosede', updateServicioSede)
router.put('/eliminarserviciosede', eliminarServicioSede)

module.exports = router
