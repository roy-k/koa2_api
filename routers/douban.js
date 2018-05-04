const router = require('koa-router')();
const path = require('path');
const static = require('koa-static');

const { query } = require('../util/async-db')

async function selectAllData( ) {
  let sql = 'SELECT * FROM nowpalying'
  let dataList = await query( sql )
  return dataList
}

async function getData() {
  let dataList = await selectAllData()
  console.log( dataList )
}


module.exports = router.get('/getNowPlaying', async (ctx) => {
    ctx.body = await getData();
})
