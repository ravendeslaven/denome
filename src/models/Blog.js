import mongoose from 'mongoose'
const { Schema, model } = mongoose

const BlogSchema = new Schema({
        title: { type: String, required: true },
        info: {
            text: { type: String },
            img: { type: String },
            //docs: {}  // Falta definir los archivos adjuntos
        },
        user: { type: mongoose.ObjectId, ref: 'User'},
    },
    { timestamps: true }
)

export default model('Blog', BlogSchema)