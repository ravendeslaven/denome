import Post from '../models/Post.js'
import User from '../models/User.js'
import mongoose from 'mongoose'

// Render create post view  
export const renderPostForm = (req, res) => {
    res.render('posts/new-post')
}

// Render posts share
export const renderUsersPosts =  async (req, res) => {
    const postsUsers = await Post.find({})
        .sort({ date: "desc" })
        .lean()
    const usersPosts = await User.find({})
        .sort({ date: "desc"})
        .lean()
    const user = new User()
    res.render('posts/users-posts', { postsUsers, usersPosts })

    
    
}

// Create Post
export const createNewPost = async (req, res) => {
    const { title, description } = req.body
    const errors = []
    if(!title) errors.push({ text: 'Please Write a Title '})
    if(!description) errors.push({ text: 'Please Write a Description'})
    if(errors.length > 0 ) {
        res.render('posts/new-post', {
            errors,
            title,
            description
        })
    } else {
        const newPost = new Post({ title, description})
        newPost.user = req.user.id
        await newPost.save()
        req.flash('success_msg', 'Post Added Succesfully')
        res.redirect('/posts')
    }
}

// Render Posts View
export const renderPosts = async (req, res) => {
    const posts = await Post.find( {user: req.user.id })
        .sort({ date: "desc"})
        .lean()
    const { name } = req.user
    res.render('posts/all-posts', { posts, name })
}


// Render Edit View
export const renderEditForm = async (req, res) => {
    const post = await Post.findById(req.params.id).lean()
    if(post.user != req.user.id) {
        req.flash('error_msg', 'Not Authorized')
        return res.redirect('/posts')
    }
    res.render('posts/edit-post', { post })
}


// Update Post
export const updatePost = async (req, res) => {
    const { title, description } = req.body
    await Post.findByIdAndUpdate(req.params.id, { title, description })
    req.flash('success_msg', 'Post Updated Succesfully')
    res.redirect('/posts')
}   


// Delete Post
export const deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'Post Deleted Succesfully')
    res.redirect('/posts')
}


// View for all posts done by users
export const viewAllPosts = async(req, res) => {
    mongoose.Collection()
}