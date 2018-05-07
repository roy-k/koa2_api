module.exports = {
    apps: [
        {
            name: "koa_api",
            script: "./index.js",
            watch: true,
            env: {
                "NODE_ENV": "pro",
            },
            instances: 4
        }
    ]
}