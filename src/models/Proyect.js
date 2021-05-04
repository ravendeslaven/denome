import mongoose  from 'mongoose'
const { Schema, model } = mongoose

const ProyectSchema = mongoose.Schema({
    name: { type: String, required: true},
    calendars: [{ type: mongoose.ObjectId, ref: 'Calendar' }],
    posts: [{ type: mongoose.ObjectId, ref: 'Post'}],
    description: {type: String, required: true},
    //ranking: {type: Number},
    //emotions: {type: String}
})


export default model('Proyect', ProyectSchema)