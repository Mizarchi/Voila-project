//user model
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define( "user", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, //checks for email format
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idEmpleado: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idTipoUsuario: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idSede: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return User
 }

 