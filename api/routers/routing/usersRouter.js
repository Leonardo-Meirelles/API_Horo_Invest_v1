const usersController = require('../../controllers/usersController')

module.exports = (userRouter) => {

    userRouter.route('/users')
        .get(usersController.getUsers)

    userRouter.route('/user')
        .get(usersController.getUserByEmail)
        
        // .delete(userControler.deleteOrder)

}