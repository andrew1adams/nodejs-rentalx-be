import { Category } from '~/modules/cars'

type ICategoriesRepositoryParams = {
  name: string
  description: string
}

interface ICategoriesRepository {
  create: (params: ICategoriesRepositoryParams) => void
  list: () => Category[]
  findByName: (name: string) => Category | undefined
}

export { ICategoriesRepository, ICategoriesRepositoryParams }
