const express = require('express');

const app = express();

 //Directorio publico
 app.use(express.static('public'));

 app.listen(3000,()=>{
    console.log("Server on port 3000");
 })

