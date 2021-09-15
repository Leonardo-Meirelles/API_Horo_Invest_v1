const stocksController = require('../../controllers/stocksController')
const joiSchema = require('../../utils/joiSchema')
const validatorDTO = require('../../utils/validateMiddlewareDTO')

module.exports = (stocksRouter) => {

    stocksRouter.route('/stocks')
        .get(stocksController.getStocks)

    stocksRouter.route('/stocks')
        .post(
            validatorDTO('body', joiSchema.postStocksSchema),
            stocksController.postStocks
        )

    stocksRouter.route('/stocks/:idstock/order')
        .post(
            validatorDTO('params', joiSchema.stockIdSchema),
            validatorDTO('body', joiSchema.postOrderSchema),
            stocksController.postOrder
        )

}