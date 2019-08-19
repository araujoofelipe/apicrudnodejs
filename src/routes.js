const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Rotas

routes.post('/teste',(req,res)=>{


    return res.json(req.body)
})

routes.get('/products/:id',ProductController.show)

routes.put('/products/:id',ProductController.update)

// routes.delete('/products/:id',ProductController.destroy)

routes.get('/products',ProductController.index);

routes.post('/products',ProductController.store);

module.exports = routes;