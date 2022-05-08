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
// Paso 3
app.get("/", function (req, res) {
res.render("Inicio", { layout: "Inicio" });
});
// Paso 4
app.get("/Contactos", function (req, res) {
res.render("Contactos", { layout: "Contactos" });
});
// Paso 5
app.get("/Galeria", function (req, res) {
res.render("Galeria", { layout: "Galeria" });
});
