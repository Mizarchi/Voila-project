// importing modules
const express = require('express');
const cors = require('cors');  // Importa el middleware de CORS
const sequelize = require('sequelize');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const db = require('./Models');
const userRoutes = require('./Routes/userRoutes');
const sedeRoutes = require('./Routes/sedeRoutes');
const almacenRoutes = require('./Routes/almacenRoutes');
const citaRoutes = require('./Routes/citaRoutes');
const clienteRoutes = require('./Routes/clienteRoutes');
const compraRoutes = require('./Routes/compraRoutes');
const detalleCompraRoutes = require('./Routes/detalleCompraRoutes');
const detallePagoRoutes = require('./Routes/detallePagoRoutes');
const detalleVentaRoutes = require('./Routes/detalleVentaRoutes');
const empleadoPrestamoRoutes = require('./Routes/empleadoPrestamoRoutes');
const inventarioRoutes = require('./Routes/inventarioRoutes');
const pagoRoutes = require('./Routes/pagoRoutes');
const productoRoutes = require('./Routes/productoRoutes');
const proveedorRoutes = require('./Routes/proveedorRoutes');
const servicioEmpleadoRoutes = require('./Routes/servicioEmpleadoRoutes');
const servicioRoutes = require('./Routes/servicioRoutes');
const servicioSedeRoutes = require('./Routes/servicioSedeRoutes');
const tipoGeneralRoutes = require('./Routes/tipoGeneralRoutes');
const tipoServicioRoutes = require('./Routes/tipoServicioRoutes');
const tipoUsuarioRoutes = require('./Routes/tipoUsuarioRoutes');
const ventaRoutes = require('./Routes/ventaRoutes');

// setting up your port
const PORT = process.env.PORT || 8080;

// assigning the variable app to express
const app = express();

// Middleware
app.use(cors());  // Habilita CORS para todas las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:4200'
}));

// synchronizing the database and forcing it to false so we don't lose data
db.sequelize.sync({ force: false }).then(() => {
    console.log("db has been re-synced");
});

// Routes for the user API
app.use('/api/users', userRoutes);
app.use('/api/sede', sedeRoutes);
app.use('/api/sede', almacenRoutes);
app.use('/api/sede', citaRoutes);
app.use('/api/sede', clienteRoutes);
app.use('/api/sede', compraRoutes);
app.use('/api/sede', detalleCompraRoutes);
app.use('/api/sede', detallePagoRoutes);
app.use('/api/sede', detalleVentaRoutes);
app.use('/api/sede', empleadoPrestamoRoutes);
app.use('/api/sede', inventarioRoutes);
app.use('/api/sede', pagoRoutes);
app.use('/api/sede', productoRoutes);
app.use('/api/sede', proveedorRoutes);
app.use('/api/sede', servicioEmpleadoRoutes);
app.use('/api/sede', servicioRoutes);
app.use('/api/sede', servicioSedeRoutes);
app.use('/api/sede', tipoGeneralRoutes);
app.use('/api/sede', tipoServicioRoutes);
app.use('/api/sede', tipoUsuarioRoutes);
app.use('/api/sede', ventaRoutes);

// Listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));

// Test connection route
app.get('/api/test-connection', async (req, res) => {
    try {
        await db.sequelize.authenticate();
        res.json({ message: 'Conexión a la base de datos exitosa!' });
    } catch (error) {
        res.status(500).json({ message: 'Error conectando a la base de datos', error });
    }
});
