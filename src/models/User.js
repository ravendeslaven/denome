import mongoose from 'mongoose'
const { Schema, model } = mongoose
import bcrypt from "bcryptjs"
import Handlebars from 'handlebars'

const UserSchema = new Schema(
    {
        name: { type: String, trim: true },
        email:{ type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true },
        date: { type: Date, default: Date.now },
        moderator: { type: Boolean, default: null, trim: true}, //  Mod can edit posts and calendars by users
        admin: { type: Boolean, default: null, trim: true},
        rol: { type: Boolean, default: null, trim: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}


UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}




/*
// View user rol
export class UserRol {
    rolUser() {
        return UserSchema.rol
    }

    asTemplateInput() {
        return {
            rolUser: this.rolUser.bind(this)
        }
    }

}

const template = Handlebars.compile("{{rolUser}}")
const output = template(new UserRol().asTemplateInput())

console.log(output)
*/


export default model('User', UserSchema)