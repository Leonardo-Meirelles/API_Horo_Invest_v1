const Joi = require('joi')

const postOrderSchema = Joi.object({

    userName: Joi.string().required(),
    userEmail: Joi.string().email().required(),
    orderData: Joi.array().items({
        orderQuantity: Joi.number().required(),
        orderPrice: Joi.number().required(),
        total: Joi.number(),
    })
})

const orderIdSchema = Joi.object({

    idorder: Joi.number().required(),
})

const stockIdSchema = Joi.object({

    idstock: Joi.number().required(),
})

const postStocksSchema = Joi.object({

    stockName: Joi.string().required(),
})

const getUserByEmailSchema = Joi.object({

    userEmail: Joi.string().email().required(),
})

module.exports = { 
    postOrderSchema,
    orderIdSchema,
    stockIdSchema,
    postStocksSchema,
    getUserByEmailSchema 
}