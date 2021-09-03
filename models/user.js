module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('stocks', {
        
        id:{
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
        }
    }, {
        
        timestamps: false
    })

    return user
}