import mongoose, { model, SchemaTypeOptions } from 'mongoose'
import { Schema, model } from mongoose

const ViewPosts = new Schema(
    "viewPosts",
    {   
        "viewOn": 'posts',
        "pipeline": [],
    }
)



export default model('ViewPosts', ViewPosts)