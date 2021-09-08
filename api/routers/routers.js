const stocksRouter = require('./routing/stocksRouter')
const usersRouter = require('./routing/usersRouter')
const adminRouter = require('./routing/adminRouter')
const ordersRouter = require('./routing/ordersRouter')

module.exports = (api, router) => {
    
    stocksRouter(router)
    usersRouter(router)
    adminRouter(router)
    ordersRouter(router)

    api.use('', router)

}