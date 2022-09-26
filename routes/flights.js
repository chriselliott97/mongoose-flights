import { Router } from 'express'

const router = Router()

import * as flightsCtrl from '../controllers/flights.js'

// GET /flights
router.get('/', flightsCtrl.index)
// GET flights/new
router.get('/new', flightsCtrl.new)
// GET flights/show
router.get('/:id', flightsCtrl.show)
//GET flights/:id/edit
router.get('/:id/edit', flightsCtrl.edit)
// POST /flights
router.post('/', flightsCtrl.create)
// PUT flights/:id
router.put('/:id', flightsCtrl.update)
// DELETE /movies/:id
router.delete('/:id', flightsCtrl.delete)




export {
  router
}
