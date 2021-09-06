module.exports = (sequelize, DataTypes) => {

    const order = sequelize.define('ordersModel',
        {
            orderNumber: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },

            userName: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            userEmail: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            stockName: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            stockQuantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            stockValue: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            }
        },

        {
            tableName: 'orders',

        }
    )

        

    return order
}