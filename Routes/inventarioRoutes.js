const express = require('express')

const InventarioController = require('../Controllers/inventarioController')
const { getinventario, postinventario, inventarioAll, updateInventario, eliminarInventario } = InventarioController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getinventario/:id', getinventario)
router.get('/inventariotodo', inventarioAll)
router.post('/postinventario', postinventario)
router.put('/updateinventario', updateInventario)
router.put('/eliminarinventario', eliminarInventario)

module.exports = router
