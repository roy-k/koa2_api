const isPro = process.env.NODE_ENV === 'pro'
const path = require('path')

// console.log('ispro', isPro);

module.exports = {
    savePath: isPro ? '/root/images/blog' : './files',
    serverPath: isPro ? 'http://47.52.170.75/images/blog' : 'D:/Code/servers/uploadFile/files',
}