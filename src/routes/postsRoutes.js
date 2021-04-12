import { Router } from "express"
import {
    renderPostForm,
    createNewPost,
    renderPosts,
    renderEditForm,
    updatePost,
    deletePost,
} from "../controllers/postsController.js"

import { isAuthenticated } from "../helpers/auth.js"

const router = Router()

// New Post
router.get('/posts/add', isAuthenticated, renderPostForm)

router.post('/posts/new-post', isAuthenticated, createNewPost)


// Get All Posts
router.get('/posts', isAuthenticated, renderPosts)

// Edit Posts
router.get('/posts/edit/:id', isAuthenticated, renderEditForm)

router.post('/posts/edit-post/:id', isAuthenticated, updatePost)

// Delete Posts
router.post('/posts/delete/:id', isAuthenticated, deletePost)

export default router