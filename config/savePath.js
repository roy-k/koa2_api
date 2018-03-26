const isPro = process.env.NODE_ENV === 'pro'
const path = require('path')

// console.log('ispro', isPro);

module.exports = {
    savePath: isPro ? '/root/images/blog' : './files',
    serverPath: isPro ? 'http://47.52.170.75/images/blog' : 'E:/Code/servers/koa2_api/files',
}