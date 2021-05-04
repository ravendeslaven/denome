import mongoose from 'mongoose'
import Proyect from 'Proyect.js'
import User from 'User.js'
const { model, Schema } = mongoose

const GroupSchema = new Schema({
    name: { type: String, required: true},
    type: [{}],
    users: [{ ref: User, }],
    proyects: [{ref: Proyect}],
    //forum: {},
    //chat: [{}],
    //ranking: { type: Number},
    //emotions: {type: String},
})

const grupo = new GroupSchema({

})


export default model('Group', GroupSchema)