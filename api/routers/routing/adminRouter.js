const adminController = require('../../controllers/adminController')

module.exports = (adminRouter) => {

    adminRouter.route('/admin')
        .get(adminController.getAdmin)

}