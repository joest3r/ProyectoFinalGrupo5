const fs = require("fs");
const funkoShopJSON = JSON.parse(fs.readFileSync("../../funkoshop.json"));

module.exports = {
    shop: (req,res) => { res.render("shop",{title:"Shop | FunkoShop"})},
    //item: (req,res) => {res.render("item",{title:"Item | FunkoShop"})},
    //itemPOST: (req,res) => {res.render("item",{title:"Item | FunkoShop"})},
    //carritoPOST: (req,res) => {res.render('carrito",{title:"Carrito | FunkoShop')},
    carrito: (req,res) => {res.render("carrito",{title:"Carrito | FunkoShop"})}
} ;