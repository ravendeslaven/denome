import User from '../models/User.js'

export const createAdminUser = async () => {
    const userFound = await User.findOne({ email: "raven_admin@gmail.com"})

    if(userFound) return

    const newUser = new User({
        name: 'Raven Admin',
        email: 'raven_admin@gmail.com',
        password: 'ibsTMs3!iB3e!V*K',
        admin: true,
    })

    newUser.password = await newUser.encryptPassword(newUser.password)

    const admin = await newUser.save()
    console.log()
}


export const createModUser = async () => {
}

//Admin puede agregar mod
//Mod puede modifciar pero no agregar
//Normal solo puede publicar y eliminar