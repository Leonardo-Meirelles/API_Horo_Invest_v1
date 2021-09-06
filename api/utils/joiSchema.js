const Joi = require('joi')

const JoiSchema = Joi.object({
  
    userName: Joi.string().required(),
    userEmail: Joi.string().email().required(),
    stockQuantity: Joi.number().required(),
    stockValue: Joi.number().required(),

});

module.exports = { 
    JoiSchema
}