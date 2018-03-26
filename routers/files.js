const router = require('koa-router')();
const path = require('path');
const static = require('koa-static');
const fs = require('fs');

const {uploadFile} = require('../util/upload');
const {readDirName, removeFile} = require('../util/files');

const {savePath, serverPath} = require('../config/savePath');

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
    const files = await readDirName(ctx, filePath);
    ctx.body = files.map((v) => {
        return `${serverPath}/${ctx.params.dir}/${v}`
    });
}).del('/delFile/:dir/:name', async (ctx) => {
    const filePath = path.join(savePath,ctx.params.dir, ctx.params.name);
    const isSuccess = await removeFile(filePath);
    if(!isSuccess) ctx.throw(400, '参数错误');
    ctx.body = 'success'
});
