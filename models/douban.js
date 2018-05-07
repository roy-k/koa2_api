const {query} = require('../util/async-db')

const {doubanNowPlaying} = require('../actions/generatorSql')

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
  return await query(sql)
}

async function addDatas(list) {
  return await query(doubanNowPlaying(list))
}

async function clearData() {
  let sql = `TRUNCATE TABLE nowplaying;`
  return await query(sql)
}

async function update(list) {
  await clearData();
  return await addDatas(list)
}

module.exports = {
    getData,
    addData,
    addDatas,
    update,
}