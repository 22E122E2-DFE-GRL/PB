const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3001

let eventos = [
    { _id: "564a5s6dasda", nome: "Pagodão", data: "21/04/22" }
]

app.get('/', (_, res) => {
    res.send('Nada de interessante por aqui!')
})

app.use(express.json())

app.use((req, res, next) => {
    console.log("Validando o usuário...")
    next()
})

// eventos

// get -> listar todos
app.get('/eventos', (req, res) => {
    res.json(eventos)
})

// get -> pegar um
app.get('/eventos/:id', (req, res) => {
    const _id = req.params.id
    const evento = eventos.filter(evento => evento._id === _id)
    res.json(evento)
})

// post -> inserir um
app.post('/eventos', (req, res) => {
    const body = req.body
    body.created_at = Date()
    body.updated_at = Date()
    eventos.push(body)
    res.json(body)
})

// put -> atualizar
app.put('/eventos/:id', (req, res) => {
    const _id = req.params.id
    const body = req.body
    body.created_at = Date()
    body.updated_at = Date()
    eventos.forEach((evento, indice) => {
        if (evento._id === _id)
            eventos[indice] = body
    })
    res.json(body)
})

// patch -> atualizar
app.patch('/eventos', (req, res) => {
    res.json({ res: "patch" })
})

// delete -> excluir
app.delete('/eventos/:id', (req, res) => {
    const _id = req.params.id
    let evento_excluido = {}
    eventos.forEach((evento, indice) => {
        if (evento._id === _id)
            evento_excluido = eventos.pop()
    })
    res.json(evento_excluido)
})

app.listen(port, () => {
    console.log(`Serviço on-line na porta: ${port}`)
})