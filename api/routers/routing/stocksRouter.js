const stocksController = require('../../controllers/stocksController')

module.exports = (stocksRouter) => {

    stocksRouter.route('/stocks')
        .get(stocksController.getStocks)

    stocksRouter.route('/stocks/:idstock')
        .post(stocksController.postStocksSell)
        
}