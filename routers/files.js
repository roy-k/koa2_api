const router = require('koa-router')();
const path = require('path');
const static = require('koa-static');
const fs = require('fs');

const {uploadFile} = require('../util/upload');
const {readDirName} = require('../util/files');

const {savePath} = require('../config/savePath');

// console.log('savePath', savePath,);

module.exports = router.post('/upload/picture/:dir', async (ctx) => {
    // 上传文件请求处理
    // let result = {success: false};
    // let serverFilePath = path.join(__dirname, 'static/image');

    // 上传文件事件
    ctx.body = await uploadFile(ctx, {
        fileType: ctx.params.dir,
        path: savePath,
    });
}).get('/getFileTag', async (ctx) => {
    ctx.body = await readDirName(ctx, savePath);
}).get('/getFiles/:dir', async (ctx) => {
    const filePath = path.join(savePath, ctx.params.dir || 'other');
    ctx.body = await readDirName(ctx, filePath);
}).get('/helloworld', async (ctx) => {
    ctx.body = 'helloworld page!' + savePath;
});
