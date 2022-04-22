import express from 'express'
import { main } from '~/routes'

const app = express()

app.use(express.json())

app.use(main)

app.listen(3333, () => console.log('Server is Running!'))
