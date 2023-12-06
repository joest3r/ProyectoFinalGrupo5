const shopControllers = {
    shop: (req,res) => res.send('Route for Shop View'),
    shopItem: (req,res) => res.send(`Route for find and retrieve a product Item from an ID: ${req.params.id}`),
    shopItemAddPOST: (req,res) => res.send('Route for adding a product to the shop cart '),
    shopCartPOST: (req,res) => res.send('Route for cart view '),
    shopCartGET: (req,res) => res.send('Route for checkout')
}
module.exports = shopControllers;