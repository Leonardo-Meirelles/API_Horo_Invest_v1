module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('order', {
        
        orderNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        
        user: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        
        stock: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        stockValue: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    }, {
//check if timestamps should be here
        timestamps: false
    })

    return order
}