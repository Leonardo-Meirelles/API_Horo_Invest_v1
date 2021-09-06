const { stocksModel, ordersModel } = require('../../models/index')

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

    const postStocksModel = {

        stockName

    }

    const stock = await stocksModel.create({ stockName })

    return res.json(stock)
}

// This will INSERT order info, INTO the ORDERS table
const postStocksOrder = async (req, res, next) => {

    const { userName, userEmail, stockName, stockQuantity, stockValue } = req.body

    const postStocksOrderModel = {
        userName,
        userEmail,
        stockName,
        stockQuantity,
        stockValue
    }

    const order = await ordersModel.create({ userName, userEmail, stockName, stockQuantity, stockValue })

    return res.json(order)

}

module.exports = {

    getStocks,
    postStocks,
    postStocksOrder

}

