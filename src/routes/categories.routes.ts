import { Router } from 'express'
import { CategoriesRepository } from '~/repositories'
import { CreateCategoryService } from '~/services'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()
const createCategoryService = new CreateCategoryService(categoriesRepository)

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  createCategoryService.execute({ name, description })

  return res.status(201).send()
})

categoriesRoutes.get('/', (_, res) => {
  const categories = categoriesRepository.list()

  return res.status(200).json(categories).send()
})

export { categoriesRoutes }
