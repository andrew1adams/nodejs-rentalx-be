import {
  ImportCategoryController,
  ImportCategoryUseCase,
  CategoriesRepository
} from '~/modules/cars'

const categoriesRepository = CategoriesRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
)

export { importCategoryController }
