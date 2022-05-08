const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
app.listen(3000, () => {
console.log("El servidor está inicializado en el puerto 3000");
});

app.set("view engine", "handlebars");

app.engine(
    "handlebars",
    exphbs.engine({
    layoutsDir: __dirname + "/views",
    })
);

app.get("/", (req, res) => {
    res.render("main");
});
    