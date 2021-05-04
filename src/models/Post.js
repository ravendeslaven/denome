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
            id: { type: mongoose.ObjectId, required: true},
            name: { type: String, required: true}
        },
    },
    {
        timestamps: true,
    }
)

export default model('Post', PostSchema)