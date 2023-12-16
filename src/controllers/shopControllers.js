const fs = require("fs"); 
const { title } = require("process");
const funkoJSON = JSON.parse(fs.readFileSync("./src/database/funkoshop.json","utf-8")); 

module.exports = {
    shop: (req,res) => { res.render("shop",{title:"Shop | FunkoShop",funko:funkoJSON})},
    item: (req,res) => {
        let{id} = req.params;

        funkoJSON.forEach((funko) => {
            if(id == funko.product_id) {
                res.render("item",{title:"Item | FunkoShop",funko:funko}
                )
        }
        })},
    //itemPOST: (req,res) => {res.render("item",{title:"Item | FunkoShop"})},
    //carritoPOST: (req,res) => {res.render('carrito",{title:"Carrito | FunkoShop')},
    carrito: (req,res) => {res.render("carrito",{title:"Carrito | FunkoShop"})}
} ;