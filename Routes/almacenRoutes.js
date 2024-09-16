const express = require('express')

const AlmacenController = require('../Controllers/almacenController')
const { getalmacen, postalmacen, almacenAll, updateAlmacen, eliminarAlmacen } = AlmacenController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )
router.get('/getalmacen/:id', getalmacen)
router.get('/almacentodo', almacenAll)
router.post('/postalmacen', postalmacen)
router.put('/updatealmacen', updateAlmacen)
router.put('/eliminaralmacen', eliminarAlmacen)

module.exports = router

