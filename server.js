require('dotenv').config()

const morgan = require('morgan')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', () => console.log('Conexión Establecida'))

app.use(express.json())
app.use(morgan('dev'))
app.use(cors());

const genshinRouter = require('./rutas/genshinChars')
app.use('/genshinChars', genshinRouter)

app.listen(3000, () => console.log('Server Iniciado'))