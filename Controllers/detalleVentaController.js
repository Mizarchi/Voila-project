//requiring modules
const express = require("express");
const db = require("../Models");

const DetalleVenta = db.detalleVenta;

const postdetalleventa = async (req, res) => {
    try {
        const idVenta = req.body?.idVenta;
        const idProducto = req.body?.idProducto;
        const cantidad = req.body?.cantidad;
        const precio = req.body?.precio;
        
        if (!idVenta || !idProducto || cantidad || precio){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await DetalleVenta.create({
          idVenta,
          idProducto,
          cantidad,
          precio
        })
        return res.status(201).json({ detalleVenta: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateDetalleVenta = async (req, res) => {
    try {
        const update = await DetalleVenta.update({
            idVenta: req.body?.idVenta,
            idProducto: req.body?.idProducto,
            cantidad: req.body?.cantidad,
            precio: req.body?.precio
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ detalleVenta: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarDetalleVenta = async (req, res) => {
    try {
        const update = await DetalleVenta.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ DetalleVenta: update });
    } catch (error) {
        console.log(error)
    }
}

const detalleVentaAll = async (req, res) => {
    try {
        const detalleVenta = await DetalleVenta.findAll()
        return res.json({ detalleVenta });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getdetalleVenta = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const detalleVenta = await DetalleVenta.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ detalleVenta });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getdetalleVenta,
    detalleVentaAll,
    postdetalleventa,
    updateDetalleVenta,
    eliminarDetalleVenta,
};