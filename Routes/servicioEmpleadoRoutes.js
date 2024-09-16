const express = require('express')

const ServicioEmpleadoController = require('../Controllers/servicioEmpleadoController')
const { getservicioEmpleado, servicioEmpleadoAll, postservicioempleado, updateservicioEmpleado, eliminarservicioEmpleado } = ServicioEmpleadoController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getservicioempleado/:id', getservicioEmpleado)
router.get('/servicioempleadotodo', servicioEmpleadoAll)
router.post('/postservicioempleado', postservicioempleado)
router.put('/updateservicioempleado', updateservicioEmpleado)
router.put('/eliminarservicioempleado', eliminarservicioEmpleado)

module.exports = router
