
// Серверная настройка с учетом сокета
const express = require('express')
const app = express()
const http = require('http').Server(app)
const socket = require('socket.io')
const io = socket(http)

const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const multer = require('multer')
const chalk = require("chalk");
const history = require("connect-history-api-fallback");

// Кастомные импорты
const conSeq = require("./conSeq");

let port = process.env.PORT || 3001;

if (process.env.PORT) {
  // Корректная работа режима HTML5 history
  app.use(history());
}

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions))

// Парсинг json - application/json
app.use(bodyParser.json());

// Парсинг запросов по типу: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Статика для выдачи по запросу
app.use('/static/user/avatars', express.static(''))

// Создание соли для хеширования
const salt = bcrypt.genSaltSync(10);

const sequelize = conSeq()

// Стэк модулей для БД


// Стэк сокетов
io.on('connection', (socket) => {

  console.log(`new user connect`)

  socket.on('disconnect', () => {
    console.log(`user disconnect`)
  })

})

// Стэк запросов
app.get('/', async (req, res) => {
  res.redirect('http://localhost:8080/')
})

// Запуск сервера
http.listen(port, () => {
  console.log(`http://${ip}:${port}`)
})