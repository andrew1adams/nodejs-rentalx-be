import { Router } from 'express'
import {
  createCategoryController,
  listCategoriesController
} from '~/modules/cars'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (req, res) =>
  createCategoryController.handle(req, res)
)

categoriesRoutes.get('/', (_req, res) =>
  listCategoriesController.handle(_req, res)
)

export { categoriesRoutes }
