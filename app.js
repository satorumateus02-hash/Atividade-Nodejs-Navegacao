const express = require("express");
const path = require("path");

const app = express();

// CONFIGURAÇÃO DO EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARES
// Permite receber dados enviados por formulário
app.use(express.urlencoded({ extended: true }));

// Permite receber requisições com JSON
app.use(express.json());


// ROTAS

const categoriaRoutes = require("./routes/categoriaRoutes");
const clientesRoutes = require("./routes/clientesRoutes");
const produtoRoutes = require("./routes/produtoRoutes");
const fornecedorRoutes = require("./routes/fornecedoresRoutes");

app.use("/categorias", categoriaRoutes);
app.use("/clientes", clientesRoutes);
app.use("/produtos", produtoRoutes); 
app.use("/fornecedores", fornecedorRoutes);

// ROTA PRINCIPAL index.ejs de views

app.get("/", (req, res) => {
    res.render("index");
});


// SERVIDOR
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
