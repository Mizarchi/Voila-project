const express = require('express')

const ProductoController = require('../Controllers/productoController')
const { getproducto, postproducto, productoAll, updateProducto, eliminarProducto } = ProductoController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getproducto/:id', getproducto)
router.get('/productotodo', productoAll)
router.post('/postproducto', postproducto)
router.put('/updateproducto', updateProducto)
router.put('/eliminarproducto', eliminarProducto)

module.exports = router
