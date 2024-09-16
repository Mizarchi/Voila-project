const express = require('express')

const DetalleVentaController = require('../Controllers/detalleVentaController')
const { getdetalleVenta, postdetalleventa, detalleVentaAll, updateDetalleVenta, eliminarDetalleVenta } = DetalleVentaController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getdetalleventa', getdetalleVenta)

router.get('/getdetalleventa/:id', getdetalleVenta)
router.get('/detalleventatodo', detalleVentaAll)
router.post('/postdetalleventa', postdetalleventa)
router.put('/updatedetalleventa', updateDetalleVenta)
router.put('/eliminardetalleventa', eliminarDetalleVenta)

module.exports = router
