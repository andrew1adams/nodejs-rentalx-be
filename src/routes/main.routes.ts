import { Router } from 'express'

import { categoriesRoutes, specificationsRoutes } from '~/routes'

const main = Router()

main.use('/categories', categoriesRoutes)

main.use('/specifications', specificationsRoutes)

export { main }
