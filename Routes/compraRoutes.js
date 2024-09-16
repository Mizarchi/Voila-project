const express = require('express')

const CompraController = require('../Controllers/compraController')
const { getcompra, postcompra, compraAll, updateCompra, eliminarCompra } = CompraController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getcompra/:id', getcompra)
router.get('/compratodo', compraAll)
router.post('/postcompra', postcompra)
router.put('/updatecompra', updateCompra)
router.put('/eliminarcompra', eliminarCompra)

module.exports = router
