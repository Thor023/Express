// SERVIDOR
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
app.listen(3000, () => {
console.log("El servidor está inicializado en el puerto 3000");
});
app.set("view engine", "handlebars");
// HANDLEBARS
app.engine(
    "handlebars",
    exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/componentes/",
    })
);
//MIDLEWARE PARA CSS
app.use("/css", express.static(__dirname +"/node_modules/bootstrap/dist/css"));

// RUTA PARA RECIBIR EL COLOR
app.get("/:color", function (req, res) {
    // DESTRUCTURING PARA OBTENER PROPIEDAD DEL REQUEST
    const { color } = req.params;
    // RENDERIZAR
    res.render("Inicio", {
    layout: "Inicio",
    colores: [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    ],
    color: color,
    });
});

