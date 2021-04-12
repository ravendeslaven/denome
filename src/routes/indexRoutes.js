import { Router } from "express"
import { renderIndex, renderAbout } from "../controllers/indexController.js"

const router = Router()

router.get('/', renderIndex)
router.get('/about', renderAbout)

export default router