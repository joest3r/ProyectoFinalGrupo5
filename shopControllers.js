/*const fs = require("fs");
const funkoShopJSON = JSON.parse(fs.readFileSync("../../funkoshop.json"));

module.exports = {
    shop: (req,res) => { res.render("shop",{title:"Shop | FunkoShop"})},
    //item: (req,res) => {res.render("item",{title:"Item | FunkoShop"})},
    //itemPOST: (req,res) => {res.render("item",{title:"Item | FunkoShop"})},
    //carritoPOST: (req,res) => {res.render('carrito",{title:"Carrito | FunkoShop')},
    carrito: (req,res) => {res.render("carrito",{title:"Carrito | FunkoShop"})}
} ;*/


//comenté lo demás con esto anda el shop
const fs = require("fs"); 
const { title } = require("process");
const funkoJSON = JSON.parse(fs.readFileSync("./src/database/funkoshop.json","utf-8")); 

module.exports = {
  index: (req, res) => {
    res.render("shop", {title:"SHOP",funko:funkoJSON}); 
  }
}



