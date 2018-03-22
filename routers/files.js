const router = require('koa-router')()
const path = require('path')
const static = require('koa-static')
const fs = require('fs')
const { uploadFile } = require('../util/upload')
const {savePath} = require('../config/savePath')

console.log('savePath', savePath, )

module.exports = router.post('/upload/picture', async (ctx) => {
    // 上传文件请求处理
    let result = { success: false }
    let serverFilePath = path.join(__dirname, 'static/image')

    // 上传文件事件
    result = await uploadFile(ctx, {
        fileType: 'images', // todo tag
        path: savePath
    })
    ctx.body = result
}).get('/helloworld', async (ctx) => {
    ctx.body = 'helloworld page!' + savePath
})
