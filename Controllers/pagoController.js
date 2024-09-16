//requiring modules
const express = require("express");
const db = require("../Models");

const Pago = db.pago;

const postpago = async (req, res) => {
    try {
        const idCita = req.body?.idCita
        const idVenta = req.body?.idVenta
        const idEmpleadoPrestamo = req.body?.idEmpleadoPrestamo
        const montoTotal = req.body?.montoTotal
        
        if (!montoTotal){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Pago.create({
          idCita,
          idVenta,
          idEmpleadoPrestamo,
          montoTotal
        })
        return res.status(201).json({ pago: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updatePago = async (req, res) => {
    try {
        const update = await Pago.update({
            idCita: req.body?.idCita,
            idVenta: req.body?.idVenta,
            idEmpleadoPrestamo: req.body?.idEmpleadoPrestamo,
            montoTotal: req.body?.montoTotal
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ pago: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarPago = async (req, res) => {
    try {
        const update = await Pago.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ pago: update });
    } catch (error) {
        console.log(error)
    }
}

const pagoAll = async (req, res) => {
    try {
        const pago = await Pago.findAll()
        return res.json({ pago });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getpago = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const pago = await Pago.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ pago });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


//exporting the modules
module.exports = {
    getpago,
    pagoAll,
    postpago,
    updatePago,
    eliminarPago
  
};