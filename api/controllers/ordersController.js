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

const deleteOrder = async (req, res, next) => {

    const { idorder } = req.params

    const findOneOrder = await ordersModel.findOne({
        where: {
            id: idorder
        }
    })

    if (!findOneOrder) {

        return res.status(404).send({
            message: ('Order not found for Id: ' + idorder)
        })
    }

    await ordersModel.destroy({
        where: {
            id: idorder
        }
    })

    return res.status(200).send({
        message: `Order ${idorder} successfully deleted.`
    })
}

module.exports = {

    getOrders,
    deleteOrder

}