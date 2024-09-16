const express = require('express')
//const userController = require('../Controllers/userController')
//const { signup, login } = userController

const sedeController = require('../Controllers/sedeController')
const { getsede, postsede, sedeAll, updateSede, eliminarSede } = sedeController
//const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
//router.post('/signup', userAuth.saveUser, signup)

//login route
//router.post('/login', login )

router.get('/getsede/:id', getsede)
router.get('/sedetodo', sedeAll)
router.post('/postsede', postsede)
router.put('/updatesede', updateSede)
router.put('/eliminarsede', eliminarSede)

module.exports = router



//add post route
//router.post('/post/:id',authenticate, PostController.addpost)

//get posts
//router.get('/post', PostController.getPosts)

//get a users post
//router.get('/post/:id', PostController.oneUserPosts)

//filtered post
//router.get('/posts', PostController.getFilteredPost)

//get single post
//router.get('/posts/:id', PostController.getAPost)

//update a post
//router.put('/postt/:id', authenticate, PostController.updatePost)

//delete a post
//router.delete('/postz/:id',authenticate,  PostController.deletePost)