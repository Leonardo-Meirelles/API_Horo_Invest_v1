const joi = require('joi')

const joiSchema = joi.object({
  
    userName: joi.string(),
    userEmail: joi.email(),
    stockQuantity: joi.number(),
    stockValue: joi.number(),

})

module.exports = joiSchema