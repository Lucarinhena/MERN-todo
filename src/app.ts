import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
import dotenv from 'dotenv'
import bodyParser = require('body-parser')



dotenv.config()
const app: Express = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended   : true }));

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

const uri:string  = `${process.env.MONGO_CONN}`

mongoose.connect(uri)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error
    })