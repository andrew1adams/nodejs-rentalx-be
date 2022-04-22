import { Router } from 'express'
import { createSpecificationController } from '~/modules/cars'

const specificationsRoutes = Router()

specificationsRoutes.post('/', (req, res) =>
  createSpecificationController.handle(req, res)
)

export { specificationsRoutes }
