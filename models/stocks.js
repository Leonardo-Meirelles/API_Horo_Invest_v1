module.exports = (sequelize, DataTypes) => {
    const stocks = sequelize.define('stocks', {
        
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        
        stockName: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        
        timestamps: false
    })

    return stocks
}