const Koa = require('koa')
const path = require('path')
const fs = require('fs')

const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(cors());
app.use(bodyParser())

const router = require('./routers/index')

app.use(router.routes()).use(router.allowedMethods())

app.listen(3001, () => {
  console.log('koa_api is starting at port 3001')
})




