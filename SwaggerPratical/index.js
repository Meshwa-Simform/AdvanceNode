const express = require("express");
const products = require("./products");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();
const PORT = 8000;

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Products API",
            version: "1.0.0",
            description: "A simple Express Products API"
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            }
        ]
    },
    apis: ["./index.js"]
};

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(options)));

/**
 * @swagger 
 * components:
 *  schemas:
 *   Product:
 *    type: object
 *    properties:
 *     id:
 *      type: integer
 *      description: The product ID
 *     name:
 *      type: string
 *      description: The product name
 *     category:
 *      type: string
 *      description: The product category
 *     price:
 *      type: integer
 *      description: The product price
 *     available:
 *      type: boolean
 *      description: The product availability
 *     manufacturer:
 *      type: string
 *      description: The product manufacturer
 *     description:
 *      type: string
 *      description: The product description
*/


/** 
 * @swagger
 * tags:
 *  name: Products
 *  description: The Products managing API
*/

/**
 * @swagger
 * /:
 *  get:
 *   summary: Returns the server status
 *   responses:
 *    200:
 *     description: The server is working
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          description: The server status message
 *          example: Server is working.
*/
app.get('/', (req, res) => {
    res.send("Server is working.");
})


/**
 * @swagger
 * /products:
 *  get:
 *   summary: Returns the list of all products
 *   tags: [Products]
 *   responses:
 *    200:
 *     description: The list of the products
 *     content:
 *       application/json:
 *         schema:
 *          type: array
 *          items:
 *              $ref: '#/components/schemas/Product'
*/
app.get('/products', (req, res) => {
    res.status(200).json(products);
})


/**
 * @swagger
 * /products/{id}:
 *  get:
 *   summary: Returns a single product based on the ID
 *   tags: [Products]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: The product ID
 *   responses:
 *    200:
 *      description: The product description by ID
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/Product'
 *    404:
 *      description: The product was not found
 *      content:
 *       application/json:
 *         schema:
 *          type: object
 *          properties:
 *            error:
 *             type: string
 *             description: The error message
 *             example: Product not found
*/  
app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
})

app.listen(PORT, () => {
    console.log(`port os running on port ${PORT}`)
})