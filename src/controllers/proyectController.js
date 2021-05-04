import mongoose from 'mongoose'
import Handlebars from 'handlebars'

import Calendar from '../models/Calendar.js'
import User from '../models/User.js'
import Proyect from '../models/Proyect.js'
import Post from '../models/Post.js'



// Create Proyect
export const renderProyectCreate = async (req, res) => {
    const calendarsUser = await Calendar.find({ 'user.id': req.user.id }).lean()
    const postsUser = await Post.find({ 'user.id': req.user.id }).lean()

    res.render('proyects/new-proyect', { calendarsUser, postsUser })
}



// Save proyect
export const createNewProyect = async (req, res) => {
    const { name, description, calendars, posts } = req.body

    //console.log('calendarios melos', calendarsInfo._id)

    let nameCalendar = await Calendar.find({ _id: calendars })
    //console.log('Calendar Name', nameCalendar.title)

    const errors = []
    if (!name) errors.push({ text: 'Please Write a Name Proyect' })
    if (errors.length > 0) {
        res.render('proyects/new-proyect', {
            errors, name, description, calendars, posts
        })
    } else {
        const newProyect = new Proyect({
            name,
            calendars: calendars,
            posts: posts,
            description
        })
        await newProyect.save()
        //console.log('Proyect User', newProyect)
        //console.log('Calendars User =>', calendarsUser)
        //console.log('Posts Users => ', postsUser)
        req.flash('success_msg', 'Proyect Added Succesfully')
        res.redirect('/showProyects')
    }
}


// show proyect
export const renderShowProyect = async (req, res) => {
    const proyect = await Proyect.find({ $match: calendars.user })
}


// Show One's Proyect
export const renderProyectOneView = async (req, res) => {
    const proyect = await Proyect.findOne({_id: req.params.id})
    let calendars = await Proyect.findOne({_id: req.params.id}).populate('calendars')
    let posts = await Proyect.findOne({_id: req.params.id}).populate('posts')

    let calendarArray = []
    for(let i = 0; i < calendars.calendars.length; i++) {
        calendarArray.push(calendars.calendars[i])
    }
    
    let postArray = []
    for(let i = 0; i < posts.posts.length; i++) {
        postArray.push(posts.posts[i])
    }

    //console.log(calendars.calendars)
    const proyectInfo = {
        name: proyect.name,
        description: proyect.description,
        calendars: calendarArray,
        posts: postArray,
    }
    const infoCalendars = []
    for(let i = 0; i < proyectInfo.calendars.length; i++) {
        infoCalendars.push(proyectInfo.calendars[i])
    }
    console.log(infoCalendars)
    //console.log(proyectInfo)
    res.render('proyects/only-proyect', {proyectInfo, infoCalendars})
}

// Delete proyect
export const deleteProyect = async (req, res) => {
    await Proyect.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'Proyect Deleted Succesfully')
    res.render('proyects/show')
}

// Show proyects
export const showProyect = async (req, res) => {
    const proyects = await Proyect.find({}).lean().sort()

    // Show data Calendar
    const calendarId = proyects.map(info => {
        return info.calendars
    })
    const id = calendarId.slice()
    //console.log(`Id calendars ${id}`)

    const nameCalendar = await Calendar.findOne({ _id: id[0] })
    const namex = `Calendar name ${nameCalendar.title}`

    for await (const proyect of Proyect.find({})) {
        //console.log(proyect)
    }


    //const calendar = await Calendar.findOne({_id: id}).lean().sort()
    const { name } = req.user
    console.log(name)
    res.render('proyects/show', { proyects, name, namex })
    //Proyect.find({}).lean().then(proyects => res.render('proyects/show', {proyects, calendars}))
}