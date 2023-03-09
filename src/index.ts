import express, { Request, Response } from 'express'
import cors from 'cors'
import { db } from './database/knex'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT)}`)
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

app.get("/courses", async (req: Request, res: Response) => {
    try {
        const result = await db.raw(`
        SELECT * FROM courses
        `)
        res.status(200).send({ courses: result })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.get("/students", async (req: Request, res: Response) => {
    try {
        const result = await db.raw(`
        SELECT * FROM students
        `)
        res.status(200).send({ students: result })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})