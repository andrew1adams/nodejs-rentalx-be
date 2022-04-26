import { Router } from 'express'
import {
  createCategoryController,
  listCategoriesController,
  importCategoryController
} from '~/modules/cars'
import multer from 'multer'

const categoriesRoutes = Router()

const upload = multer({ dest: 'tmp' })

categoriesRoutes.post('/', (req, res) =>
  createCategoryController.handle(req, res)
)

categoriesRoutes.get('/', (_req, res) =>
  listCategoriesController.handle(_req, res)
)

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
  return importCategoryController.handle(req, res)
})

export { categoriesRoutes }
