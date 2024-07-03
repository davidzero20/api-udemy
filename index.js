const port = process.env.PORT || 3977;
const app = require("./app");
const moongose = require('mongoose');
const urlMongoDB = "mongodb+srv://cdavidzerocdzr:0501david@api-udemy.xd3pwzj.mongodb.net/apidb";

moongose.connect(urlMongoDB, (err, res) => {

    try {
        if(err){
            throw err;
        }
        else{
            console.log("Conexión exitosa a la base de datos");

            app.listen(port, () => {
            console.log("Server is running at http://localhost:" + port);
            })
    } 
    }     catch (error) {
        console.log("Error al conectar a la base de datos");
    }
})       






