import { Router } from 'express'
import { deleteProyect, 
    showProyect, 
    renderProyectCreate, 
    createNewProyect ,
    renderProyectOneView
} from '../controllers/proyectController.js'

import { isAuthenticated } from '../helpers/auth.js'
/*import {
    renderCalendarForm,
    createNewCalendar,
    renderCalendars,
    renderEditForm,
    updateCalendar,
    deleteCalendar,
    renderCalendarsView,
} from '../controllers/calendarsController.js'

import { isAuthenticated } from '../helpers/auth.js'
import router from './indexRoutes.js'
*/

const router = Router()


// Show proyect
router.get('/showProyects', showProyect)

// Show One's Proyect
router.get('/proyects/view/:id', isAuthenticated, renderProyectOneView)

// Create Proyect
router.get('/proyects/new-proyect', isAuthenticated, renderProyectCreate)

router.post('/proyects/new-proyect', isAuthenticated, createNewProyect)


// Delete Proyect
router.post('/proyects/delete/:id', isAuthenticated, deleteProyect)



export default router