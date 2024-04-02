const express = require('express')
const logger = require('morgan')

const app = express()

const productsRouter = require('./routes/product/productsRouter')

app.use(logger('dev'))
app.use(express.json())

app.use('/api/products', productsRouter)

module.exports = app