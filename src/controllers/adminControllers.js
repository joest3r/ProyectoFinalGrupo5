module.exports = {


    admin: (req,res) => res.render("admin",{title:"Admin | Funkoshop"}),
    create: (req,res) => res.render("create",{title:"Admin | Funkoshop"}),
    //admincreatePOST: (req,res) => res.send('Route for admin create'),
    //admineditGETID: (req,res) => res.send('Route for admin edit'),
    //admineditPUTID: (req,res) => res.send('Route for admin edit put'),
    //adminDELETEID: (req,res) => res.send('Route for admin delete')
}

 