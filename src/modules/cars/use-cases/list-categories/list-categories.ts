import {
  ListCategoriesUseCase,
  CategoriesRepository,
  ListCategoriesController
} from '~/modules/cars'

const categoriesRepository = CategoriesRepository.getInstance()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
)

export { listCategoriesController }
