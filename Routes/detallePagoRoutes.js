const express = require('express')

const DetallePagoController = require('../Controllers/detallePagoController')
const { getdetallePago, postdetallepago, detallePagoAll, updateDetallePago, eliminarDetallePago } = DetallePagoController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getdetallepago', getdetallePago)

router.get('/getdetallepago/:id', getdetallePago)
router.get('/detallepagotodo', detallePagoAll)
router.post('/postdetallepago', postdetallepago)
router.put('/updatedetallepago', updateDetallePago)
router.put('/eliminardetallepago', eliminarDetallePago)

module.exports = router

