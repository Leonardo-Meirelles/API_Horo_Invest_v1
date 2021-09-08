const stocksController = require('../../controllers/stocksController')

module.exports = (stocksRouter) => {

    stocksRouter.route('/stocks')
        .get(stocksController.getStocks)

    stocksRouter.route('/stocks')
        .post(stocksController.postStocks)

    stocksRouter.route('/stocks/:idstock/order')
        .post(stocksController.postOrder)

}