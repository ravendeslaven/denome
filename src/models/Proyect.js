import mongoose  from 'mongoose'
const { Schema, model } = mongoose

const ProyectSchema = mongoose.Schema({
    name: { type: String, required: true},
    calendar: { type: mongoose.ObjectId, ref: 'Calendar'},
    blogs: [{ type: mongoose.ObjectId, ref: 'Blog'}],
    description: {type: String, required: true},
    comments: [{
        id: { type: mongoose.ObjectId },
        user: {
            id: { type: mongoose.ObjectId, ref: 'User' },
            name: { type: String, ref: 'User'}
        },
        content: { type: String, required: true}
    }],
    ranking: [{ 
        user: { type: mongoose.ObjectId, required: true },
        score: { type: Number, required: true }
     }],
    //emotions: {type: String}
})

// Falta terminar de definir modelo del Proyecto

export default model('Proyect', ProyectSchema)