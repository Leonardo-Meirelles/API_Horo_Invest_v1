const { usersModel, ordersModel } = require('../../models/index')

const getUsers = async (req, res, next) => {
    try{
        const findAllUsers = await usersModel.findAll({})

        const returnAllUsers = findAllUsers.map(item => {

            const { id, userName, userEmail } = item;

            return {
                id,
                userName,
                userEmail
            }
        })

        res.status(200).send(returnAllUsers)

    } catch (error) {

        res.status(400).send(error)
    }
}

const getUserByEmail = async (req, res) => {

    const findOneUser = await usersModel.findOne({
        where: {
            userEmail: req.params.id
        },

        include: [{
            model: ordersModel,
            as: 'order'
        }]
    })

    if (!findOneUser) {

        return res.status(400).send({
            message: 'User not found for email: ' + req.params.id
        })
    }
    
    const { userName, userEmail, order } = findOneUser

    return res.status(200).send({
        userName,
        userEmail,
        order
    })
}

module.exports = {

    getUsers,
    getUserByEmail,

}