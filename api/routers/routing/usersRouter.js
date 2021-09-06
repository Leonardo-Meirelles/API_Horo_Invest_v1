const userController = require('../../controllers/usersController')

module.exports = (userRouter) => {

    userRouter.route('/user')
        .get(userController.getUser)
        // .delete(userControler.deleteOrder)

}