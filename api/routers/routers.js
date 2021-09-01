const stocksRouter = require('./routing/stocksRouter.js')
const userRouter = require('./routing/userRouter.js')
const adminRouter = require('./routing/adminRouter.js')

module.exports = (api, router) => {
    
    stocksRouter(router)
    userRouter(router)
    adminRouter(router)

    api.use('', router)

}