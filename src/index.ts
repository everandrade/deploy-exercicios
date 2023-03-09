import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses } from './database'
import { addAbortSignal } from 'stream'
import { TCourse } from './types'
import { TStudent } from './types'
import { students } from './database'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

app.get("/courses", (req: Request, res: Response) => {
    res.status(200).send(courses)
})

app.get("/students", (req: Request, res: Response) => {
    res.status(200).send(students)
})

app.get("/courses/search", (req: Request, res: Response) => {
    const q = req.query.q as string
    const coursesFilter = courses.filter(
        (course) => course.name.toLowerCase().includes(q.toLowerCase())
    )
    res.status(200).send(coursesFilter)
})

app.post("/courses", (req: Request, res: Response) => {
    const id = req.body.id
    const name = req.body.name
    const lessons = req.body.lessons
    const stack = req.body.stack

    const newCourse: TCourse = {
        id: id,
        // pode ser só id, name, lesson e stack pq é igual.
        name: name,
        lessons: lessons,
        stack,
    }

    courses.push(newCourse)

    res.status(201).send("Curso criado com sucesso!")
})

app.post("/student", (req: Request, res: Response) => {
    const id = req.body.id
    const name = req.body.name
    const age = req.body.age

    const newStudent: TStudent = {
        id,
        name,
        age
    }

    students.push(newStudent)

    res.status(201).send("Aluno inserido com sucesso!")
})