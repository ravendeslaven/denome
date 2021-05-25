/*
import { Router } from "express"
import {
    renderPostForm,
    createNewPost,
    renderPosts,
    renderEditForm,
    updatePost,
    deletePost,
    renderUsersPosts,
} from "../controllers/postsController.js"

import { isAuthenticated } from "../helpers/auth.js"

const router = Router()

// New Post
router.get('/posts/add', isAuthenticated, renderPostForm)

router.post('/posts/new-post', isAuthenticated, createNewPost)


// Get All Posts
router.get('/posts', isAuthenticated, renderPosts)

// Get All Users Posts
router.get('/news-posts', isAuthenticated, renderUsersPosts)

// Edit Posts
router.get('/posts/edit/:id', isAuthenticated, renderEditForm)

router.post('/posts/edit-post/:id', isAuthenticated, updatePost)

// Delete Posts
router.post('/posts/delete/:id', isAuthenticated, deletePost)

*/

// Metodo API
import { Router } from 'express'
import { showBlogs,
         addBlog,
         editBlog,
         delBlog
} from '../controllers/blogController.js'
 
const router = Router()

router.get('/blogs', showBlogs) // Muestra todos los posts hechos por los usuarios de un grupo
router.post('/blog/add', addBlog) // Almacenar nuevo post
router.put('/blog/edit/:id', editBlog) // Editar post
router.post('/blog/del/:id', delBlog) // Eliminar post


export default router