import express from 'express'
import { getRecruitments, getRecruitmentById, updateRecruitment, createRecruitment, deleteRecruitment } from '../controllers/recCont.js'

const router = express.Router()

router.get('/get', getRecruitments)
router.get('/:id', getRecruitmentById)
router.post('/create', createRecruitment)
router.put('/:id', updateRecruitment);
router.delete('/delete/:id', deleteRecruitment)

export default router
