//requiring modules
const express = require("express");
const db = require("../Models");

const Compra = db.compra;

const postcompra = async (req, res) => {
    try {
        const idSede = req.body?.idSede;
        const idProveedor = req.body?.idProveedor;
        const numFactura = req.body?.numFactura;
        const numControl = req.body?.numControl;
        const monto = req.body?.monto;
        
        if (!idSede || !idProveedor || numFactura || numControl || monto ){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Compra.create({
          idSede,
          idProveedor,
          numFactura,
          numControl,
          monto
        })
        return res.status(201).json({ compra: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateCompra = async (req, res) => {
    try {
        const update = await Compra.update({
            idSede: req.body?.idSede,
            idProveedor: req.body?.idProveedor,
            numFactura: req.body?.numFactura,
            numControl: req.body?.numControl,
            monto: req.body?.monto
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ compra: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarCompra = async (req, res) => {
    try {
        const update = await Compra.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ compra: update });
    } catch (error) {
        console.log(error)
    }
}

const compraAll = async (req, res) => {
    try {
        const compra = await Compra.findAll()
        return res.json({ compra });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getcompra = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const compra = await Compra.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ compra });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getcompra,
    compraAll,
    postcompra,
    updateCompra,
    eliminarCompra,
};