//importing modules
const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../Connection/connection');
//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is discover
//const sequelize = new Sequelize(`postgres://postgres:123456@localhost:5433/discover`, {dialect: "postgres"})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)
db.almacen = require('./almacenModel') (sequelize, DataTypes)
db.cita = require('./citaModel') (sequelize, DataTypes)
db.cliente = require('./clienteModel') (sequelize, DataTypes)
db.compra = require('./compraModel') (sequelize, DataTypes)
db.detalleCompra = require('./detalleCompraModel') (sequelize, DataTypes)
db.detallePago = require('./detallePagoModel') (sequelize, DataTypes)
db.detalleVenta = require('./detalleVentaModel') (sequelize, DataTypes)
db.empleado = require('./empleadoModel') (sequelize, DataTypes)
db.empleadoPrestamo = require('./empleadoPrestamoModel') (sequelize, DataTypes)
db.inventario = require('./inventarioModel') (sequelize, DataTypes)
db.pago = require('./pagoModel') (sequelize, DataTypes)
db.producto = require('./productoModel') (sequelize, DataTypes)
db.proveedor = require('./proveedorModel') (sequelize, DataTypes)
db.sede = require('./sedeModel') (sequelize, DataTypes)
db.servicioEmpleado = require('./servicioEmpleadoModel') (sequelize, DataTypes)
db.servicio = require('./servicioModel') (sequelize, DataTypes)
db.servicioSede = require('./servicioSedeModel') (sequelize, DataTypes)
db.tipoGeneral = require('./tipoGeneralModel') (sequelize, DataTypes)
db.tipoServicio = require('./tipoServicioModel') (sequelize, DataTypes)
db.tipoUsuario = require('./tipoUsuarioModel') (sequelize, DataTypes)
db.venta = require('./ventaModel') (sequelize, DataTypes)

//exporting the module
module.exports = db