const express = require('express')

const ClienteController = require('../Controllers/clienteController')
const { getcliente, postcliente, clienteAll, updateCliente, eliminarCliente } = ClienteController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getcliente/:id', getcliente)
router.get('/clientetodo', clienteAll)
router.post('/postcliente', postcliente)
router.put('/updatecliente', updateCliente)
router.put('/eliminarcliente', eliminarCliente)

module.exports = router
