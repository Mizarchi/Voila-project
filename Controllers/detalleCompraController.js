//requiring modules
const express = require("express");
const db = require("../Models");

const DetalleCompra = db.detalleCompra;

const postdetallecompra = async (req, res) => {
    try {
        const idCompra = req.body?.idCompra;
        const idProducto = req.body?.idProducto;
        const cantidad = req.body?.cantidad;
        const precio = req.body?.precio;
        
        if (!idCompra || !idProducto || cantidad || precio){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await DetalleCompra.create({
          idCompra,
          idProducto,
          cantidad,
          precio
        })
        return res.status(201).json({ detalleCompra: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateDetalleCompra = async (req, res) => {
    try {
        const update = await DetalleCompra.update({
            idCompra: req.body?.idCompra,
            idProducto: req.body?.idProducto,
            cantidad: req.body?.cantidad,
            precio: req.body?.precio
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ detalleCompra: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarDetalleCompra = async (req, res) => {
    try {
        const update = await DetalleCompra.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ detalleCompra: update });
    } catch (error) {
        console.log(error)
    }
}

const detalleCompraAll = async (req, res) => {
    try {
        const detalleCompra = await DetalleCompra.findAll()
        return res.json({ detalleCompra });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getdetalleCompra = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const detalleCompra = await DetalleCompra.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ detalleCompra });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getdetalleCompra,
    detalleCompraAll,
    postdetallecompra,
    updateDetalleCompra,
    eliminarDetalleCompra,
};