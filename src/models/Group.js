import mongoose from 'mongoose'
const { model, Schema } = mongoose

const GroupSchema = new Schema({
    name: { type: String, required: true},
    users: [{ type: mongoose.ObjectId, ref: 'User' }],
    proyects: [{ type: mongoose.ObjectId, ref: 'Proyect'}],
    calendars: [{ type: mongoose.ObjectId, ref: 'Calendar'}],
    posts: [{ type: mongoose.ObjectId, ref: 'Post'}],
    forum: {
        id: { type: mongoose.ObjectId },
        comments: [{
            id: { type: mongoose.ObjectId},
            user: { type: mongoose.ObjectId, ref: 'User'},
            content: {
                text: { type: String },
                img: [{ type: String }],
                //docs: [{ }]
            },
        }]
    },
    ranking: [{ 
        user: { type: mongoose.ObjectId, required: true },
        score: { type: Number, required: true }
     }],
    //emotions: {type: String},
})

const grupo = new GroupSchema({

})


export default model('Group', GroupSchema)