const ordersController = require('../../controllers/ordersController')
const joiSchema = require('../../utils/joiSchema')
const validatorDTO = require('../../utils/validateMiddlewareDTO')

module.exports = (ordersRouter) => {

    ordersRouter.route('/orders')
        .get(ordersController.getOrders)

    ordersRouter.route('/orders/:idorder/delete')
        .delete(
            validatorDTO('params', joiSchema.orderIdSchema),
            ordersController.deleteOrder
        )

}