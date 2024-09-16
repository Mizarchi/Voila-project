//TipoUsuario model
module.exports = (sequelize, DataTypes) => {
    const TipoUsuario = sequelize.define( "tipo_usuario", {
        tipo_usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return TipoUsuario
 }