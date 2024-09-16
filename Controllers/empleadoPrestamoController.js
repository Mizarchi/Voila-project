//requiring modules
const express = require("express");
const db = require("../Models");

const EmpleadoPrestamo = db.empleadoPrestamo;

const postempleadoprestamo = async (req, res) => {
    try {
        const tipoPrestamo = req.body?.tipoPrestamo;
        const cantidad = req.body?.cantidad;
        const plazo = req.body?.plazo;
        const fechaSolicitud = req.body?.fechaSolicitud;
        
        if (!cantidad){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await EmpleadoPrestamo.create({
          tipoPrestamo,
          cantidad,
          plazo,
          fechaSolicitud
        })
        return res.status(201).json({ empleadoPrestamo: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateEmpleadoPrestamo = async (req, res) => {
    try {
        const update = await EmpleadoPrestamo.update({
            tipoPrestamo: req.body?.tipoPrestamo,
            cantidad: req.body?.cantidad,
            plazo: req.body?.plazo,
            fechaSolicitud: req.body?.fechaSolicitud,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ empleadoPrestamo: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarEmpleadoPrestamo = async (req, res) => {
    try {
        const update = await EmpleadoPrestamo.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ empleadoPrestamo: update });
    } catch (error) {
        console.log(error)
    }
}

const empleadoPrestamoAll = async (req, res) => {
    try {
        const empleadoPrestamo = await EmpleadoPrestamo.findAll()
        return res.json({ empleadoPrestamo });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getempleadoPrestamo = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const empleadoPrestamo = await EmpleadoPrestamo.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ empleadoPrestamo });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getempleadoPrestamo,
    empleadoPrestamoAll,
    postempleadoprestamo,
    updateEmpleadoPrestamo,
    eliminarEmpleadoPrestamo,
};