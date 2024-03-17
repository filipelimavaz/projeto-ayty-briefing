import { Router } from 'express'
import BriefingController from '../controllers/BriefingController.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('API de Briefings!')
});

router.post('/briefings', BriefingController.store)
router.get('/briefings', BriefingController.index)
router.get('/briefings/:id', BriefingController.show)
router.put('/briefings/:id', BriefingController.update)
router.delete('/briefings/:id', BriefingController.delete)

export default router
