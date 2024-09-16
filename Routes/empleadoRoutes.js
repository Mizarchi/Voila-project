const express = require('express')

const EmpleadoController = require('../Controllers/empleadoController')
const { getempleado, postempleado, empleadoAll, updateEmpleado, eliminarEmpleado } = EmpleadoController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getempleado/:id', getempleado)
router.get('/empleadotodo', empleadoAll)
router.post('/postempleado', postempleado)
router.put('/updateempleado', updateEmpleado)
router.put('/eliminarempleado', eliminarEmpleado)

module.exports = router
