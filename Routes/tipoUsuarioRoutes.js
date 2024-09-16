const express = require('express')

const TipoUsuarioController = require('../Controllers/tipoUsuarioController')
const { tipoUsuarioAll, posttipousuario, gettipoUsuario, updateTipoUsuario, eliminarTipoUsuario } = TipoUsuarioController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )
router.get('/gettiposervicio/:id', gettipoUsuario)
router.get('/tiposerviciotodo', tipoUsuarioAll)
router.post('/posttiposervicio', posttipousuario)
router.put('/updatetipousuario', updateTipoUsuario)
router.put('/eliminartipousuario', eliminarTipoUsuario)

module.exports = router