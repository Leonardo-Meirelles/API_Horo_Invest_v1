module.exports = (sequelize, DataTypes) => {

    const stocks = sequelize.define('stocksModel',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },

            stockName: {
                type: DataTypes.TEXT,
                allowNull: false
            },
        },

        {
            tableName: 'stocks',

        })

    return stocks
}