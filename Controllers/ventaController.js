//requiring modules
const express = require("express");
const db = require("../Models");

const Venta = db.venta;

const postventa = async (req, res) => {
    try {
        const idSede = req.body?.idSede;
        const idCliente = req.body?.idCliente;
        const numFactura = req.body?.numFactura;
        const numControl = req.body?.numControl;
        const monto = req.body?.monto;
        
        if (!idSede || !idCliente || !numFactura || !numControl || !monto){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Venta.create({
            idSede,
            idCliente,
            numFactura,
            numControl,
            monto
        })
        return res.status(201).json({ venta: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateVenta = async (req, res) => {
    try {
        const update = await Venta.update({
            idSede: req.body?.idSede,
            idCliente: req.body?.idCliente,
            numFactura: req.body?.numFactura,
            numControl: req.body?.numControl,
            monto: req.body?.monto
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ venta: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarVenta = async (req, res) => {
    try {
        const update = await Venta.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ venta: update });
    } catch (error) {
        console.log(error)
    }
}

const ventaAll = async (req, res) => {
    try {
        const venta = await Venta.findAll()
        return res.json({ venta });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getventa = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const venta = await Venta.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ venta });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getventa,
    ventaAll,
    postventa,
    updateVenta,
    eliminarVenta
};