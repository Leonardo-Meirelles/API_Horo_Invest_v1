const stocksRouter = require('./routing/stocksRouter')
const usersRouter = require('./routing/usersRouter')
const ordersRouter = require('./routing/ordersRouter')

module.exports = (api, router) => {
    
    stocksRouter(router)
    usersRouter(router)
    ordersRouter(router)

    api.use('', router)

}