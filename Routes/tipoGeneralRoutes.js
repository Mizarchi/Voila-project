const express = require('express')

const TipoGeneralController = require('../Controllers/tipoGeneralController')
const { gettipoGeneral, posttipogeneral, tipoGeneralAll, updateTipoGeneral, eliminarTipoGeneral } = TipoGeneralController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )
router.get('/gettipogeneral/:id', gettipoGeneral)
router.get('/tipogeneraltodo', tipoGeneralAll)
router.post('/posttipogeneral', posttipogeneral)
router.put('/updatetipogeneral', updateTipoGeneral)
router.put('/eliminartipogeneral', eliminarTipoGeneral)

module.exports = router