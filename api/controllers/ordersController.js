const { ordersModel, usersModel, stocksModel } = require('../../models/index')

const getOrders = async (req, res, next) => {

    try {

        const findAllOrders = await ordersModel.findAll({
            include: [{
                model: usersModel,
                as: 'user'
            },
            {
                model: stocksModel,
                as: 'stock'
            }
        ]

        })

        const returnAllOrders = findAllOrders.map(item => {
           
            const { id, orderQuantity, orderPrice, user, stock } = item           

            return {
                id,
                user,
                stock,
                orderQuantity,
                orderPrice
            }
        })

        res.status(200).send(returnAllOrders)

    } catch (error) {
        throw error
    }
}

module.exports = {

    getOrders

}