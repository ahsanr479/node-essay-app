const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')

const app = express()

const PORT = 3000;

app.use(express.json())
app.use(userRouter)

app.listen(PORT,() => {
    console.log('Server is up');
})