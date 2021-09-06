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

        })

    return user
}