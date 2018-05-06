const router = require('koa-router')();
const path = require('path');
const static = require('koa-static');

const {getData, addDatas} = require('../models/douban')

// 查
module.exports = router.get('/douban/now/get', async(ctx) => {
  ctx.body = await getData();
}).get('/douban/now/add', async(ctx) => {
  ctx.body = await addDatas();
}).get('/douban/now/clear', async(ctx) => {
  ctx.body = await addDatas();
});

// 增
// 删
// 改
