import { Router } from 'express'
import { Category } from '~/models'

const categoriesRoutes = Router()

const categories: Category[] = []

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const category = new Category({ name, description })

  categories.push(category)

  return response.status(201).json(category).send()
})

export { categoriesRoutes, categories }
