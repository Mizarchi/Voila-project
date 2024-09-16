//requiring modules
const express = require("express");
const db = require("../Models");

const DetallePago = db.detallePago;

const postdetallepago = async (req, res) => {
    try {
        const idPago = req.body?.idPago;
        const idTipoPago = req.body?.idTipoPago;
        const monto = req.body?.monto;
        
        if (!idPago){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await DetallePago.create({
          idPago,
          idTipoPago,
          monto
        })
        return res.status(201).json({ detallePago: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateDetallePago = async (req, res) => {
    try {
        const update = await DetallePago.update({
            idPago: req.body?.idPago,
            idTipoPago: req.body?.idTipoPago,
            monto: req.body?.monto
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ detallePago: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarDetallePago = async (req, res) => {
    try {
        const update = await DetallePago.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ detallePago: update });
    } catch (error) {
        console.log(error)
    }
}

const detallePagoAll = async (req, res) => {
    try {
        const detallePago = await DetallePago.findAll()
        return res.json({ detallePago });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getdetallePago = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const detallePago = await DetallePago.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ detallePago });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


//exporting the modules
module.exports = {
    getdetallePago,
    detallePagoAll,
    postdetallepago,
    updateDetallePago,
    eliminarDetallePago,
};