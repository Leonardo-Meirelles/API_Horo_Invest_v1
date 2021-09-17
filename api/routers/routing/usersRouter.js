const usersController = require('../../controllers/usersController')
const joiSchema = require('../../utils/joiSchema')
const validatorDTO = require('../../utils/validateMiddlewareDTO')

module.exports = (userRouter) => {

    userRouter.route('/users')
        .get(usersController.getUsers)

    userRouter.route('/user/:userEmail')
        .get(
            validatorDTO('params', joiSchema.getUserByEmailSchema),
            usersController.getUserByEmail
        )

}