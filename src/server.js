const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClass } = require('./pages')

//Configuração do nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Configurações do servidor
server.use(express.urlencoded({ extended: true}))
server.use(express.static("public"))

//Configuração das rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClass)
.listen(5500)