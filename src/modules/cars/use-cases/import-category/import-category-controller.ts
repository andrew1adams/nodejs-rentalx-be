import { Request, Response } from 'express'
import { ImportCategoryUseCase } from '~/modules/cars'

class ImportCategoryController {
  private importCategoryUseCase: ImportCategoryUseCase

  constructor(importCategoryUseCase: ImportCategoryUseCase) {
    this.importCategoryUseCase = importCategoryUseCase
  }

  handle(req: Request, res: Response): Response {
    const { file } = req

    this.importCategoryUseCase.execute(file)

    return res.send()
  }
}

export { ImportCategoryController }
