//requiring modules
const express = require("express");
const db = require("../Models");

const Producto = db.producto;

const postproducto = async (req, res) => {
    try {
        const name = req.body?.name;
        const descripcion = req.body?.descripcion;
        const idMarca = req.body?.idMarca;
        const idModelo = req.body?.idModelo;
        const presentacion = req.body?.presentacion;
        const unidad = req.body?.unidad;
        const medida = req.body?.medida;
        const cantidad = req.body?.cantidad;
        const observacion = req.body?.observacion;
        const precio = req.body?.precio;
        const idMoneda = req.body?.idMoneda;
        
        if (!name){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Producto.create({
          name,
          descripcion,
          idMarca,
          idModelo,
          presentacion,
          unidad,
          medida,
          cantidad,
          observacion,
          precio,
          idMoneda
        })
        return res.status(201).json({ producto: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateProducto = async (req, res) => {
    try {
        const update = await Producto.update({
            name: req.body?.name,
            descripcion: req.body?.descripcion,
            idMarca: req.body?.idMarca,
            idModelo: req.body?.idModelo,
            presentacion: req.body?.presentacion,
            unidad: req.body?.unidad,
            medida: req.body?.medida,
            cantidad: req.body?.cantidad,
            observacion: req.body?.observacion,
            precio: req.body?.precio,
            idMoneda: req.body?.idMoneda
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ producto: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarProducto = async (req, res) => {
    try {
        const update = await Producto.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ producto: update });
    } catch (error) {
        console.log(error)
    }
}

const productoAll = async (req, res) => {
    try {
        const producto = await Producto.findAll()
        return res.json({ producto });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getproducto = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const producto = await Producto.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ producto });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getproducto,
    productoAll,
    postproducto,
    updateProducto,
    eliminarProducto
};