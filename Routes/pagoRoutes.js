const express = require('express')

const PagoController = require('../Controllers/pagoController')
const { getpago, postpago, pagoAll, updatePago, eliminarPago } = PagoController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getpago/:id', getpago)
router.get('/pagotodo', pagoAll)
router.post('/postpago', postpago)
router.put('/updatepago', updatePago)
router.put('/eliminarpago', eliminarPago)

module.exports = router

