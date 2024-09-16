//requiring modules
const express = require("express");
const db = require("../Models");

const Inventario = db.inventario;

const postinventario = async (req, res) => {
    try {
        const idSede = req.body?.idSede;
        const idAlmacen = req.body?.idAlmacen;
        const idProducto = req.body?.idProducto;
        const descripcion = req.body?.descripcion;
        const presentacion = req.body?.presentacion;
        const stock = req.body?.stock;
        const minStock = req.body?.minStock;
        
        if (!idSede || !idAlmacen || !idProducto){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Inventario.create({
          idSede,
          idAlmacen,
          idProducto,
          descripcion,
          presentacion,
          stock,
          minStock
        })
        return res.status(201).json({ inventario: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateInventario = async (req, res) => {
    try {
        const update = await Inventario.update({
            idSede: req.body?.idSede,
            idAlmacen: req.body?.idAlmacen,
            idProducto: req.body?.idProducto,
            descripcion: req.body?.descripcion,
            presentacion: req.body?.presentacion,
            stock: req.body?.stock,
            minStock: req.body?.minStock,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ inventario: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarInventario = async (req, res) => {
    try {
        const update = await Inventario.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ inventario: update });
    } catch (error) {
        console.log(error)
    }
}

const inventarioAll = async (req, res) => {
    try {
        const inventario = await Inventario.findAll()
        return res.json({ inventario });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getinventario = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const inventario = await Inventario.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ inventario });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getinventario,
    inventarioAll,
    postinventario,
    updateInventario,
    eliminarInventario,
};