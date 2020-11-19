
// Запуск приложения экспресса
const express = require('express')
const app = express()

// Настройка сокетов через http сервер
const http = require('http').Server(app)
const socket = require('socket.io')
const io = socket(http)

const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer')
const chalk = require('chalk');
const { v4 } = require('uuid')
const history = require('connect-history-api-fallback');

// Кастомные импорты
const conSeq = require("./conSeq");
const usersModule = require('./modules/usersModule')

let port = process.env.PORT || 3001;

if (process.env.PORT) {
  // Корректная работа режима HTML5 history
  app.use(history());
}

// Настройка cors
var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions))

// Парсинг json - application/json
app.use(bodyParser.json());

// Парсинг запросов по типу: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Статика для выдачи по запросу
const staticUserAvatars = path.join(__dirname, 'src', 'img', 'users-avatars')
app.use('/static/user/avatars', express.static(staticUserAvatars))

// Создание облака для аватарок
const storageUsersAvatar = multer.diskStorage({
  destination: (req, file, cb) =>{
      cb(null, staticUserAvatars);
  },
  filename: (req, file, cb) =>{
      cb(null, v4()+"_"+file.originalname);
  }
});

// Создание соли для хеширования
const salt = bcrypt.genSaltSync(10);

// Покдлючение к базе данных
const sequelize = conSeq()

// Стэк модулей для базы данных
const Users = sequelize.define('users', usersModule)

// Стэк сокетов
io.on('connection', (socket) => {

  console.log(`new user connect`)

  socket.on('disconnect', () => {
    console.log(`user disconnect`)
  })

})

// Стэк облака с файлами
let userAvatarUpload = multer({storage: storageUsersAvatar})

// Стэк запросов
app.get('/', async (req, res) => {
  res.send('<img src="http://localhost:8080/static/user/avatars/test.jpg">')
})

// Запуск сервера
http.listen(port, async () => {
  await sequelize.sync({ force: true })
  console.log('Connection DB.');
  console.log(`server start`)
})