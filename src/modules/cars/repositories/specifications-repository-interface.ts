import { Specification } from '~/modules/cars'

type ISpecificationsRepositoryParams = {
  name: string
  description: string
}

interface ISpecificationsRepository {
  create: (params: ISpecificationsRepositoryParams) => void
  findByName: (name: string) => Specification | undefined
}

export { ISpecificationsRepository, ISpecificationsRepositoryParams }
