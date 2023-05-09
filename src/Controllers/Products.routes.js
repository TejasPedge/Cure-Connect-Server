const express = require('express');
const ProductsRoutes = express.Router();
const {PRODUCT_SCHEMA} = require('../Models/Products.model')

const  {Auth_User} = require('../Middlewares/Authentication.middleware');

// Get all the products available in the database
ProductsRoutes.get('/', async(req,res) => {

    try {
        const products = await PRODUCT_SCHEMA.find();
        res.send(products);
    } catch (error) {
        console.log(error);
        res.status(500).send({err : error})
    }
});

// Add products to the database, only admin can do this opearation;
ProductsRoutes.post('/create', async(req,res) => {
    try {
        const products = req.body;

        const adding = new PRODUCT_SCHEMA(products);

        await adding.save();

        res.send({success : true, msg : 'Product added successfully'})

    } catch (error) {
        console.log(error);
        res.send({err : error});
    }


});

//  Delete products from the database, only admin can do this
ProductsRoutes.delete('/delete/:id', async(req,res) => {

    try {
        const id = req.params.id;
        const data = await PRODUCT_SCHEMA.findByIdAndDelete(id);
        if(!data) {
            return res.status(404).send({err : 'Data not found'});
        }

        res.send({msg : 'Data deleted successfully'});

    } catch (error) {
        console.log(error);

        res.send({err : error});
    }


});

// Update products data in the database, only admin can do this
ProductsRoutes.patch('/update/:id', async (req,res) => {

    try {
        const id = req.params.id;
        const data = req.body;
        const update = await PRODUCT_SCHEMA.findByIdAndUpdate(id,data);
        res.send({msg : 'data updated successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).send({err : error});
    }


});


module.exports = {ProductsRoutes};