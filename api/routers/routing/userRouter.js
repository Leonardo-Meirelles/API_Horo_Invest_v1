const userController = require('../../controllers/userController')

module.exports = (userRouter) => {

    userRouter.route('/user')
        .get(userController.getUser)
        .delete(userControler.deleteOrder)

}