/*
import Calendar from '../models/Calendar.js'
import User from '../models/User.js'
import mongoose from 'mongoose'

// Render create calendar view
export const renderCalendarForm = (req, res) => {
    res.render('calendars/new-calendar')
}

// Render calendars share
export const renderCalendarsView =  async (req, res) => {
    const calendarsUsers = await Calendar.find({})
        .sort({ date: "desc" })
        .lean()
    res.render('calendars/users-calendars', { calendarsUsers })    
}


// Create Calendar
export const createNewCalendar = async (req, res) => {
    const {  title, color, start, end }  = req.body
    const errors = []
    if(!title) errors.push({text: 'Please Write a Title '})
    if(!color) errors.push({ text: 'Please Write a Description'})
    if(!start) errors.push({ text: 'Please select your entry date'})
    if(!end) errors.push({ text: 'Please select output date'})
    if(errors.length > 0) {
        res.render('calendars/new-calendar', {
            errors,
            title,
            color,
            start,
            end
        })
    } else {
        const newCalendar = new Calendar({ title, color, start, end  })
        newCalendar.user.id = req.user.id
        newCalendar.user.name = req.user.name
        //newCalendar.user.name = req.user.name // Relation between calendar with our user
        await newCalendar.save()
        req.flash('success_msg', 'Calendar Added Succesfully')
        res.redirect('/calendars')
    }
}

// Render Calendars View
export const renderCalendars = async (req, res) => {
    const calendars = await Calendar.find( {'user.id': req.user.id })
        .sort({ date: "desc"})
        .lean()
    const { name } = req.user
    console.log(calendars)
    res.render('calendars/all-calendars', { calendars, name  })
}

// Render Edit View
export const renderEditForm = async (req, res) => {
    const calendar = await Calendar.findById(req.params.id).lean()
    if(calendar.user != req.user.id) {
        req.flash('error_msg', 'Not authorized')
        return res.redirect('/calendars')
    }
    res.render('calendars/edit-calendar', { calendar })
}

// Update Calendar
export const updateCalendar = async (req, res) => {
    const { title, color, start, end } = req.body
    await Calendar.findByIdAndUpdate(req.params.id, { title, color, start, end })
    req.flash('success_msg', 'Post Updated Succesfully')
    res.redirect('/calendars')
}

// Delete Calendar
export const deleteCalendar = async(req, res) => {
    await Calendar.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'Calendar Deleted Succesfully')
    res.redirect('/calendars')
}
*/

import Calendar from '../models/Calendar.js'
import User from '../models/User.js'
import mongoose from 'mongoose'


export const showEvents = async(req, res) => {
    await Calendar.find((err, calendar) => {
        const events = calendar.calendarEvents
        if(err) return res.status(500, err.message)
        res.status(200).jsonp(events)
    })
}

export const showCalendar = async(req, res) => { 
    await Calendar.findById(req.params.id, (err, calendar) => {
        if(err) res.status(500, err.message)
        res.status(200).jsonp(calendar)
    })
}


export const addCalendar = async (req, res) => {
    console.log('POST')

    const calendar = new Calendar({
        title: req.body.title,
        theme: req.body.theme,
        
        // Agregar propiedades a agregar al momento de crear un calendario
    })

    await calendar.save((err, calendar) => {
        if(err) return res.status(500, err.message)
        res.status(200).jsonp(calendar)
    })
}


export const updateCalendar = async(req, res) => {
    await Calendar.findById(req.params.id, (err, calendar) => {
        calendar.title = req.body.title,
        calendar.theme = req.body.theme

        calendar.save((err) => {
            if(err) return res.status(500, err.message)
            res.status(200).jsonp(calendar)
        })
    })
}

export const delCalendar = async(req, res) => {
    await Calendar.findById(req.params.id, (err, calendar) => {
        calendar.remove((err) => {
            if(err) return res.status(500, err.message)
            res.status(200).send()
        })
    })
}