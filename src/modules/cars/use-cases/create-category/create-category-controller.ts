import { Response, Request } from 'express'
import { CreateCategoryUseCase } from '~/modules/cars'

class CreateCategoryController {
  createCategoryUseCase: CreateCategoryUseCase

  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase
  }

  handle(req: Request, res: Response) {
    const { name, description } = req.body

    this.createCategoryUseCase.execute({ name, description })

    return res.status(201).send()
  }
}

export { CreateCategoryController }
