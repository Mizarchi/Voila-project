const express = require('express')

const EmpleadoPrestamoController = require('../Controllers/empleadoPrestamoController')
const { getempleadoPrestamo, postempleadoprestamo, empleadoPrestamoAll, updateEmpleadoPrestamo, eliminarEmpleadoPrestamo } = EmpleadoPrestamoController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getempleadoprestamo/:id', getempleadoPrestamo)
router.get('/empleadoprestamotodo', empleadoPrestamoAll)
router.post('/postempleadoprestamo', postempleadoprestamo)
router.put('/updateEmpleadoPrestamo', updateEmpleadoPrestamo)
router.put('/eliminarempleadoprestamo', eliminarEmpleadoPrestamo)

module.exports = router

