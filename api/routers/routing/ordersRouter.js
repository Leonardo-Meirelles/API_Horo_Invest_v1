const ordersController = require('../../controllers/ordersController')

module.exports = (ordersRouter) => {

    ordersRouter.route('/orders')
        .get(ordersController.getOrders)

    ordersRouter.route('/orders/:idorder/delete')
        .delete(ordersController.deleteOrder)

}