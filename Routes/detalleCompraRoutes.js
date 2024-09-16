const express = require('express')

const DetalleCompraController = require('../Controllers/detalleCompraController')
const { getdetalleCompra, postdetallecompra, detalleCompraAll, updateDetalleCompra, eliminarDetalleCompra } = DetalleCompraController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getdetallecompra/:id', getdetalleCompra)
router.get('/detallecompratodo', detalleCompraAll)
router.post('/postdetallecompra', postdetallecompra)
router.put('/updatedetallecompra', updateDetalleCompra)
router.put('/eliminardetallecompra', eliminarDetalleCompra)

module.exports = router
