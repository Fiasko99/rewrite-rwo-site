// Иницилизация сервера
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const socket = require('socket.io')
const io = socket(http)

const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const path = require('path')
const bcrypt = require('bcrypt')
const multer = require('multer')
const chalk = require('chalk')
const { v4 } = require('uuid')
const cors = require('cors')
const history = require('connect-history-api-fallback')

// Кастомные импорты
const conSeq = require("./conSeq")
const usersModule = require('./modules/usersModule')

let PORT = process.env.PORT || 3001;

// if (process.env.PORT || PORT) {
//   // Корректная работа режима HTML5 history
//   app.use(history());
// }

// Настройка cors
app.use(cors());

// Парсинг json - application/json
app.use(bodyParser.json())

// Парсинг запросов по типу: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Статика для выдачи по запросу
const staticUsersAvatars = path.join(__dirname, 'src', 'imgs', 'users')
const client = path.join(__dirname, '../', 'client', 'dist')
app.use(express.static(staticUsersAvatars))
app.use(express.static(client))

// // Создание облака для аватарок
const storageUsersAvatar = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, staticUsersAvatars)
  },
  filename: (req, file, cb) =>{
    cb(null, v4()+"_"+file.originalname);
  }
});

// Стэк облака с файлами
let userAvatarUpload = multer({storage: storageUsersAvatar})

// Создание соли для хеширования
const salt = bcrypt.genSaltSync(10);

// Покдлючение к базе данных
const sequelize = conSeq()

// Стэк модулей для базы данных
const Users = sequelize.define('users', usersModule)

// Запросы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'client', 'dist', 'index.html'))
})

// Стэк сокетов
io.on('connection', (socket) => {
  console.log(`new user connect`)
  socket.on('disconnect', () => {
    console.log(`new user disconnect`)
  })
})

// Запуск сервера 
http
  .listen(PORT, async () => {
    await sequelize.sync({ force: true })
    console.log(chalk.green(`[server] connection DB `));
    console.log(chalk.green(`[server] server start `))
    console.log(chalk.bold.blueBright(`_`.repeat(48)))
});