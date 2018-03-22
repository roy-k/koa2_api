module.exports = {
    apps: [
        {
            name: "koa-upload",
            script: "./index.js",
            watch: true,
            env: {
                "NODE_ENV": "pro",
            }
        }
    ]
}