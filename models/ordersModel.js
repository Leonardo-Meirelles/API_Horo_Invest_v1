module.exports = (sequelize, DataTypes) => {

    const order = sequelize.define('ordersModel',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },

            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            stockId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            orderQuantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            orderPrice: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            }
        },

        {
            tableName: 'orders',

        }
    )

    order.associate = (db) => {

        order.belongsTo(db.usersModel, {
            foreignKey: 'userId',
            as: 'user'
        })

        order.belongsTo(db.stocksModel, {
            foreignKey: 'stockId',
            as: 'stock'
        }) 

    }


    return order
}