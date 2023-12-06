const adminControllers = {


    admin: (req,res) => res.send('Route for admin View'),
    admincreateGET: (req,res) => res.send('Route for admin create'),
    admincreatePOST: (req,res) => res.send('Route for admin create'),
    admineditGETID: (req,res) => res.send('Route for admin edit'),
    admineditPUTID: (req,res) => res.send('Route for admin edit put'),
    adminDELETEID: (req,res) => res.send('Route for admin delete')
}

module.exports = adminControllers;