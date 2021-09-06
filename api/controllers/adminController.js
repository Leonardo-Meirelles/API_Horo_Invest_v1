const order = require('../../models/index')

const getAdmin = async (req, res) => {

    try {
        const result = await order.findAll({});
        const finalResult = result.map(item => {
            const { order, user, stock, quantity, stockValue } = item;
            return{
                order,
                user,
                stock,
                quantity,
                stockValue
            }
        })
        res.status(200).send(finalResult);
    } catch (error) {
        throw error;
    }
};

// const getByOrderNumber = async (req, res) => {
//     const { orderNumber } = req.params;
//     const result = await order.findOne({
//         where: {
//             orderNumber: req.params.orderNumber
//         }
//     });

//     if (!result) {
//         return res.status(404).send({
//             message: 'result not found for order number ' + orderNumber
//         })
//     }
    
//     const {orderNumber, user, stock, quantity, stockValue} = result;

//     return res.status(200).send({
//         orderNumber,
//         user,
//         stock,
//         quantity,
//         stockValue
//     })
    
// };

// const getByStock = async (req, res) => {
//     const { stock } = req.params;
//     const result = await order.findOne({
//         where: {
//             stock: req.params.stock
//         }
//     });

//     if (!result) {
//         return res.status(404).send({
//             message: 'result not found for stock ' + stock
//         })
//     }
    
//     const {orderNumber, user, stock, quantity, stockValue} = result;

//     return res.status(200).send({
//         orderNumber,
//         user,
//         stock,
//         quantity,
//         stockValue
//     })
// };

const deleteOrder = (req, res) => {
    res.status(200).send({
        ...req.params
    })
};

module.exports = {

    getAdmin,
    // getByOrderNumber,
    // getByStock,
    deleteOrder
    
}