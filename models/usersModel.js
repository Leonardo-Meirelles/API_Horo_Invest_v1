module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define('usersModel',
        {
            id: {
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
        },

        {
            tableName: 'users',

        }
    )

    user.associate = (db) => {

        user.hasMany(db.ordersModel, {
            foreignKey: 'userId',
            as: 'order'
        })
    }

    return user
}