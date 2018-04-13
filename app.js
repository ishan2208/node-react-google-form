const express = require("express");
const cors = require('cors');
const routeController = require("./routes/routeController");


const app = express();
app.use(cors());
app.use("/",routeController);
let server = app.listen(8081,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log("app listening on port",port);
})