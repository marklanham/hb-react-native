import express from 'express'
import * as data from '../db/data/products.json'

const router = express.Router()

router.get('/all', (_, res) => {
  res.json({ data })
})

router.get('/:id', function (req, res) {
  const containsId = new RegExp(req.params.id)
  res.json(
    Object.values(data).filter((item) => {
      return containsId.test(item.id)
    }),
  )
})

export default router
