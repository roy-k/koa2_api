const {query} = require('../util/async-db')

const mocksql = require('../config/mockdb')

async function selectAllData() {
  let sql = 'SELECT * FROM nowplaying'
  let dataList = await query(sql)
  return dataList
}

async function getData() {
  let dataList = await selectAllData()
  return dataList;
}

async function addData(movie) {
  const {poster, title, rating, info_url, ticket_url} = movie;
  let sql = `insert into nowplaying (poster, title, rating, info_url, ticket_url) values ('${poster}','${title}','${rating}','${info_url}','${ticket_url}');`
  console.log('====================================');
  console.log(sql);
  console.log('====================================');
  return await query(sql)
}

async function addDatas() {
  let sql = `insert into nowplaying (poster, title, rating, info_url, ticket_url, create_time, modified_time) values ${mocksql};`
  let dataList = await query(sql)
}

async function clearData() {
  let sql = `TRUNCATE TABLE nowplaying;`
  return await query(sql)
}

module.exports = {
    getData,
    addData,
    addDatas,
}