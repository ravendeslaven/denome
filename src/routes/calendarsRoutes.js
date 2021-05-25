/*
import { Router } from 'express'
import {
    renderCalendarForm,
    createNewCalendar,
    renderCalendars,
    renderEditForm,
    updateCalendar,
    deleteCalendar,
    renderCalendarsView,
} from '../controllers/calendarsController.js'

import { isAuthenticated } from '../helpers/auth.js'

const router = Router()

// New calendar
router.get('/calendars/new-calendar', isAuthenticated, renderCalendarForm)

router.post('/calendars/new-calendar', isAuthenticated, createNewCalendar)

// Get All Calendars. Working in logic for show calendars by users
router.get('/calendars', isAuthenticated, renderCalendars)


// Get all Calendars by users
router.get('/news-calendars', renderCalendarsView )

// Edit Calendar
router.get('/calendars/edit/:id', isAuthenticated, renderEditForm)

router.post('/calendars/edit/:id', isAuthenticated, updateCalendar)

// Delete Calendar
router.post('/calendars/delete/:id', isAuthenticated, deleteCalendar)

*/

import { Router } from 'express'
import { showEvents,
         showCalendar,
         addCalendar,
         updateCalendar,
         delCalendar,
} from '../controllers/calendarsController.js'

const router = Router()

router.get('/news', showEvents) // Muestra eventos de los calendarios. NOTA: Definir show events
router.get('/calendar/:id', showCalendar) // Muestra el calendario solicitado
router.post('/calendar/add/', addCalendar) // Crear calendario
router.put('/calendar/edit/:id', updateCalendar) // Guardar calendario
router.post('/calendar/del/:id', delCalendar)



export default router
