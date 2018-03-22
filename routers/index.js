const router = require('koa-router')()

// const home = require('./home')
// const api = require('./api')
// const page = require('./page')

const files = require('./files')

// router.use('/', home.routes(), home.allowedMethods())
router.use('/api', files.routes(), files.allowedMethods())
// router.use('/page', page.routes(), page.allowedMethods())

module.exports = router
