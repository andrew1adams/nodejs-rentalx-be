import {
  CreateCategoryUseCase,
  CategoriesRepository,
  CreateCategoryController
} from '~/modules/cars'

const categoriesRepository = new CategoriesRepository()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

export { createCategoryController }
