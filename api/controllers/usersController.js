const user = require('../../models/index')

const getUser = async (req, res, next) => {

    try{
        const result = await user.findAll({});
        const finalResult = result.map(item => {
            const { id, userName, userEmail } = item;
            return {
                id,
                userName,
                userEmail
            }
        })
        res.status(200).send(finalResult)
    } catch (error) {
        throw error
    }
};

const getById = async (req, res) => {
    const { user } = req.params;
    const result = await user.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!result) {
        return res.status(404).send({
            message: 'result not found for id ' + id
        })
    }
    
    const {id, userName, userEmail} = result;

    return res.status(200).send({
        id,
        userName,
        userEmail
    })
};

const deleteOrder = (req, res) => {
    res.status(200).send({
        ...req.params
    })
};

module.exports = {

    getUser,
    getById,
    deleteOrder

}