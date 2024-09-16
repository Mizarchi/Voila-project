const express = require('express')

const TipoVentaController = require('../Controllers/ventaController')
const { postventa, ventaAll, getventa, updateVenta, eliminarVenta } = TipoVentaController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )
router.get('/gettiposervicio/:id', getventa)
router.get('/tiposerviciotodo', ventaAll)
router.post('/postventa', postventa)
router.put('/updateventa', updateVenta)
router.put('/eliminarventa', eliminarVenta)

module.exports = router