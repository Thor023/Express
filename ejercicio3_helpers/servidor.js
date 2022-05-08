// Paso 1
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
app.listen(3000, () => {
console.log("El servidor está inicializado en el puerto 3000");
});
app.set("view engine", "handlebars");
// Paso 2
app.engine(
"handlebars",
exphbs.engine({
layoutsDir: __dirname + "/views",
partialsDir: __dirname + "/views/componentes/",
})
);

// Paso 1
app.get("/ventas", function (req, res) {
    // Paso 2
    res.render("Ventas", {
    layout: "Ventas",
    usuario: "Maria José",
    ventas: [14990, 42490, 22500],
    });
});
