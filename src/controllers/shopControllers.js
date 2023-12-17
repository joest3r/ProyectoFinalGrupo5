/* CONTROLADOR PARA LA RUTA SHOP */

const fs = require("fs");
const { title } = require("process");
const funkoJSON = JSON.parse(fs.readFileSync("./src/database/funkoshop.json", "utf-8"));

module.exports = {
    shop: (req, res) => { res.render("shop", { title: "Shop | FunkoShop", funko: funkoJSON }) },
    item: (req, res) => {
        let { id } = req.params;
        let licenciaFunko;
        let nombreFunko;
        let descripcionFunko;
        let imagenfFunko;
        let imagenbFunko;
        let precioFunko;
        funkoJSON.forEach((funko) => {
            if (id == funko.product_id) {
                licenciaFunko = funko.licence_name;
                nombreFunko = funko.product_name;
                descripcionFunko = funko.product_description;
                imagenfFunko = funko.img_front;
                imagenbFunko = funko.img_back;
                precioFunko = funko.product_price;
                res.render("item", { title: "Item | FunkoShop", funko: funkoJSON, licenciaFunko, nombreFunko, descripcionFunko, imagenbFunko, imagenfFunko, precioFunko })
            }

        })
        res.render("error", { titulo: "No pudimos encontrar el recurso solicitado", descripcion: "Intente nuevamente", title: "ERROR" })
    },

    //itemPOST: (req,res) => {res.render("item",{title:"Item | FunkoShop"})},
    //carritoPOST: (req,res) => {res.render('carrito",{title:"Carrito | FunkoShop')},
    carrito: (req, res) => { res.render("carrito", { title: "Carrito | FunkoShop" }) }
};

