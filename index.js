const Koa = require('koa')
const path = require('path')
const fs = require('fs')

const app = new Koa()

var cors = require('koa2-cors');
app.use(cors());

const router = require('./routers/index')

app.use(router.routes()).use(router.allowedMethods())

app.listen(3001, () => {
  console.log('koa_api is starting at port 3001')
})




