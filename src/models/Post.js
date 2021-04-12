import mongoose from 'mongoose'
const { Schema, model } = mongoose

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export default model('Post', PostSchema)