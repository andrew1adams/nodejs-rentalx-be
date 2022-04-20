import { Router } from 'express'
import {
  SpecificationsRepository,
  CreateSpecificationService
} from '~/modules/cars'

const specificationsRoutes = Router()

const specificationsRepository = new SpecificationsRepository()
const createSpecificationService = new CreateSpecificationService(
  specificationsRepository
)

specificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  createSpecificationService.execute({ name, description })

  return res.status(201).send()
})

export { specificationsRoutes }
