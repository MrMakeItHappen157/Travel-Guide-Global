import express from 'express'
const router = express.Router()
import {
  getPlacesData,
  getWeatherData
} from '../controllers/travelAdvisorController.js'

router.route('/places/:type').get(getPlacesData)
router.route('/weather').get(getWeatherData)

export default router
