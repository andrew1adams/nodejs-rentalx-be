import {
  CreateSpecificationController,
  CreateSpecificationUseCase,
  SpecificationsRepository
} from '~/modules/cars'

const specificationsRepository = new SpecificationsRepository()
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
)
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
)

export { createSpecificationController }
