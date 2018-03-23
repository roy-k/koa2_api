const path = require('path');
const fs = require('fs');

const readDirName = function(ctx, path) {
    return new Promise((resolve,reject)=>{
        fs.readdir(path,(err,data)=>{
            if(err){
                reject({
                    type: '读取文件夹失败',
                    err
                })
            }else{
                resolve(data)
            }
        })
    })
}

// 读取文件:  fs.readFile(filename,callback);
function readFiles(dir){
    return new Promise((resolve,reject)=>{
        fs.readFile(dir,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

// 写入文件：fs.writeFile(filename,content,callback);
function write() {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, '我是颜乐乐', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(console.log('写入完成'))
        });

    })
}

async function start() {
    await write();
    fs.readFile(filename,'utf-8',(err,data)=>{
        if(err){
            throw err
        }else{
            console.log(data.toString());
        }
    })
}

// 追加文件内容：fs.writeFile(filename,content,{flag:'a'},callback)

function write(){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filename,'我希望我是追加的内容',{'flag':'a'},(err)=>{
            if(err){
                reject(err)
            }
            resolve(console.log('追加内容成功'))
        });

    })
}

async function start(){
    await write();
    fs.readFile(filename,'utf-8',(err,data)=>{
        if(err){
            console.log('读取文件失败');
            return console.log(err);
        }else{
            console.log(data.toString());
        }
    })
}

// 删除文件：fs.unlink(filename,callback);
function remove(){
    return new Promise((resolve,reject)=>{
        fs.unlink(filename,(err)=>{
            if(err){
                reject(console.log(err))
            }
            resolve(console.log('删除文件成功'))
        });
    })
}

async function start(){
    await remove();
    fs.readdir(__dirname,(err,files)=>{
        if(err){
            return console.log(err)
        }else{
            files.forEach((item)=>{
                console.log(item)
            })
        }
    })
}



module.exports = {
    readDirName,
}