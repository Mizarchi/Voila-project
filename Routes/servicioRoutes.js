const express = require('express')

const ServicioController = require('../Controllers/servicioController')
const { getservicio, servicioAll, postservicio, updateServicio, eliminarServicio } = ServicioController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getservicio/:id', getservicio)
router.get('/serviciotodo', servicioAll)
router.post('/postservicio', postservicio)
router.put('/updateservicio', updateServicio)
router.put('/eliminarservicio', eliminarServicio)

module.exports = router
