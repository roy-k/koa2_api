const router = require('koa-router')();
const path = require('path');
const static = require('koa-static');

const {getData, addDatas} = require('../models/douban')

// 查
module.exports = router.get('/douban/getNowPlaying', async(ctx) => {
  ctx.body = await getData();
}).get('/douban/addNowPlayings', async(ctx) => {
  ctx.body = await addDatas();
});

// 增
// 删
// 改
