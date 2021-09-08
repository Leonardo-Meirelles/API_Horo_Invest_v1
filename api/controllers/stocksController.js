const { stocksModel, usersModel, ordersModel } = require('../../models/index')

// This will SELECT the id and the name of the stock, FROM the STOCKS table
const getStocks = async (req, res, next) => {

    try {
        const findAllStocks = await stocksModel.findAll({})

        const returnAllStocks = findAllStocks.map(item => {
            const { id, stockName } = item
            return {
                id,
                stockName
            }
        })

        res.status(200).send(returnAllStocks)

    } catch (error) {
        throw error
    }
}

// This will INSERT the name of the stock, INTO the STOCKS table
const postStocks = async (req, res, next) => {

    const { stockName } = req.body

    const stock = await stocksModel.create({ stockName })

    return res.json(stock)
}

// This will INSERT the USER info (userName and userEmail) INTO the USERS table
// and then the ORDER info (user info + stockId, orderQuantity and orderPrice) INTO the ORDERS table
const postOrder = async (req, res, next) => {

    const { idstock } = req.params
    const { userName, userEmail, orderQuantity, orderPrice } = req.body

    const user = await usersModel.create({ userName, userEmail })

    const findUser = await usersModel.findOne({
        where: {
            userName: req.body.userName
        }
    })

    const userId = findUser.id
    const stockId = parseInt(idstock)

    const order = await ordersModel.create({
        userId,
        stockId,
        orderQuantity,
        orderPrice
    })

    return res.json(order)
}

module.exports = {

    getStocks,
    postStocks,
    postOrder

}

