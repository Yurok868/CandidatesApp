const express = require('express')
const cookieParser = require('cookie-parser');
const morgan = require('morgan')

const app = express()
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');
const candidatesRouter = require('./routes/candidatesRouter');
app.use(express.static('public'));
app.use(morgan('dev'))
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
app.use('/api/auth', authRouter)
app.use('/api/tokens', tokensRouter)
app.use('/api/candidates', candidatesRouter)
app.use(express.json())

module.exports = app