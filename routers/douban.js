const router = require('koa-router')();
const path = require('path');
const static = require('koa-static');

const {getData, update} = require('../models/douban')

// 查
module.exports = router.get('/douban/now/get', async(ctx) => {
  ctx.body = await getData();
}).get('/douban/now/clear', async(ctx) => {
  ctx.body = await addDatas();
}).post('/douban/now/update', async(ctx) => {
  ctx.body = await update(ctx.request.body);
});

// 增
// 删
// 改
