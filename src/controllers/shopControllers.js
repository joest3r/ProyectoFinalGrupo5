const fs = require("fs");
const funkoShopJSON = JSON.parse(fs.readFileSync("../../funkoshop.json"));

module.exports = {
    shop: (req,res) => { res.render("shop",{title:"Shop | FunkoShop"})},
    //shopItem: (req,res) => res.send(`Route for find and retrieve a product Item from an ID: ${req.params.id}`),
    //shopItemAddPOST: (req,res) => res.send('Route for adding a product to the shop cart '),
    //shopCartPOST: (req,res) => res.send('Route for cart view '),
    carrito: (req,res) => res.render("carrito",{title:"Carrito | FunkoShop"})
} ;