//cita model
module.exports = (sequelize, DataTypes) => {
    const Cita = sequelize.define( "cita", {
        idSede: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idCliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idTipoServicio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEmpleado: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        horaInicio: {
            type: DataTypes.TIME,
            allowNull: false
        },
        horaFin: {
            type: DataTypes.TIME,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return Cita
 }
