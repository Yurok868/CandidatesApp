const express = require('express')
const cookieParser = require('cookie-parser');
const morgan = require('morgan')
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');
const candidatesRouter = require('./routes/candidatesRouter');

const app = express()
app.use(express.static('public'));
app.use(morgan('dev'))
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/tokens', tokensRouter)
app.use('/api/candidates', candidatesRouter)

module.exports = app