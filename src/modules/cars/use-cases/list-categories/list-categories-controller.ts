import { Response, Request } from 'express'
import { ListCategoriesUseCase } from '~/modules/cars'

class ListCategoriesController {
  listCategoriesUseCase: ListCategoriesUseCase

  constructor(listCategoriesUseCase: ListCategoriesUseCase) {
    this.listCategoriesUseCase = listCategoriesUseCase
  }

  handle(_req: Request, res: Response): Response {
    const categories = this.listCategoriesUseCase.execute()

    return res.status(200).json(categories).send()
  }
}

export { ListCategoriesController }
