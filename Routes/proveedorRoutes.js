const express = require('express')

const ProveedorController = require('../Controllers/proveedorController')
const { getproveedor, proveedorAll, postproveedor, updateProveedor, eliminarProveedor } = ProveedorController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getproveedor/:id', getproveedor)
router.get('/proveedortodo', proveedorAll)
router.post('/postproveedor', postproveedor)
router.put('/updateproveedor', updateProveedor)
router.put('/eliminarproveedor', eliminarProveedor)

module.exports = router

