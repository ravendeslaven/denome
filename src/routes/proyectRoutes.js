/*
import { Router } from 'express'
import { deleteProyect, 
    showProyect, 
    renderProyectCreate, 
    createNewProyect ,
    renderProyectOneView
} from '../controllers/proyectController.js'

import { isAuthenticated } from '../helpers/auth.js'
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

*/


// Metodo API
import { Router } from 'express'
import { showProyects,
         addProyect,
         editProyect,
         delProyect
} from '../controllers/proyectController.js'


const router = Router()

// Definir metodos de en el controlador

router.get('/proyects', showProyects) // Muestra todos los proyectos existentes
router.post('/proyects/add', addProyect)  // Almacenar nuevo proyecto
router.put('/proyects/edit/:id', editProyect) // Editar el proyecto
router.post('/proyects/del/:id', delProyect) // Eliminar proyecto


export default router