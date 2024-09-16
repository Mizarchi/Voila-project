const express = require('express')
//const userController = require('../Controllers/userController')
//const { signup, login } = userController

const citaController = require('../Controllers/citaController')
const { getcita, citaAll, postcita, updatecita, eliminarcita } = citaController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getcita/:id', getcita)
router.get('/citatodo', citaAll)
router.post('/postcita', postcita)
router.put('/updatecita', updatecita)
router.put('/eliminarcita', eliminarcita)

module.exports = router



//add post route
//router.post('/post/:id',authenticate, PostController.addpost)

//get posts
//router.get('/post', PostController.getPosts)

//get a users post
//outer.get('/post/:id', PostController.oneUserPosts)

//filtered post
//router.get('/posts', PostController.getFilteredPost)

//get single post
//router.get('/posts/:id', PostController.getAPost)

//update a post
//router.put('/postt/:id', authenticate, PostController.updatePost)

//delete a post
//router.delete('/postz/:id',authenticate,  PostController.deletePost)