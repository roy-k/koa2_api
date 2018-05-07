const mocksql = require('../config/mockdb')


  let sql = `insert into nowplaying (poster, title, rating, info_url, ticket_url, create_time, modified_time) values ${mocksql};`

console.log('====================================');
console.log(sql);
console.log('====================================');