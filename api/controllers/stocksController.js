const { stocksModel, usersModel, ordersModel } = require('../../models/index')
const stockApi = require('../services/stockApi')

const getStocks = async (req, res, next) => {
    try {
        const findAllStocks = await stocksModel.findAll({})

        const returnAllStocks = await Promise.all(findAllStocks.map(async item => {

            const { id, stockName } = item

            const stockDataObject = await stockApi.GetStocksApi(stockName)

            return {
                id,
                stockName,
                stockPrice: stockDataObject.stockPrice
            }
        }))

        console.log(returnAllStocks);
        res.status(200).send(returnAllStocks)

    } catch (error) {
        throw error
    }
}

const postStocks = async (req, res, next) => {

    const { stockName } = req.body

    const findStock = await stocksModel.findOne({
        where: {
            stockName: stockName
        }
    })

    if (!findStock) {

        const stock = await stocksModel.create({ stockName })

        return res.status(200).send({
            message: 'Stock successfully created.'
        })
    }

    return res.status(400).send({
        message: 'This stock is already in the system.'
    })
}

const postOrder = async (req, res, next) => {

    const { idstock } = req.params
    const { userName, userEmail, orderQuantity, orderPrice } = req.body

    const findStock = await stocksModel.findOne({
        where: {
            id: idstock
        }
    })

    if (!findStock) {

        return res.status(404).send({
            message: 'Stock not found.'
        })
    }

    const findUser = await usersModel.findOne({
        where: {
            userEmail: userEmail
        }
    })

    let user

    if (!findUser) {

        user = await usersModel.create({ userName, userEmail })

    } else {

        user = findUser

    }

    const order = await ordersModel.create({
        userId: user.id,
        stockId: findStock.id,
        orderQuantity,
        orderPrice
    })

    return res.status(200).send({
        message: 'Order successfully created.'
    })
}

module.exports = {

    getStocks,
    postStocks,
    postOrder

}

