import {
  CreateCategoryUseCase,
  CategoriesRepository,
  CreateCategoryController
} from '~/modules/cars'

const categoriesRepository = CategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

export { createCategoryController }
