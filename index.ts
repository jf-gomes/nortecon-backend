import express from 'express'
import routes from './src/routes'
import { authenticate } from './src/database/db'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

authenticate()
    .then(() => app.listen(3000, () => console.log('Connected')))
    .catch((err) => console.log(err))