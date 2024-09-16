const express = require('express')

const TipoServicioController = require('../Controllers/tipoServicioController')
const { tipoServicioAll, posttipoServicio, gettipoServicio, updateTipoServicio, eliminarTipoServicio } = TipoServicioController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )
router.get('/gettiposervicio/:id', gettipoServicio)
router.get('/tiposerviciotodo', tipoServicioAll)
router.post('/posttiposervicio', posttipoServicio)
router.put('/updatetiposervicio', updateTipoServicio)
router.put('/eliminartiposervicio', eliminarTipoServicio)

module.exports = router