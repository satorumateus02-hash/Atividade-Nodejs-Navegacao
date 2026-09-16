const express = require("express");
const router = express.Router();

// DADOS FICTÍCIOS INICIAIS
let produtos = [
  {
    id: 1,
    nome: "Notebook",
    descricao: "Notebook para uso profissional",
    preco: 3500.00,
    estoque: 10,
    categoria: "Informática"
  },
  {
    id: 2,
    nome: "Smartphone",
    descricao: "Celular com ótima câmera",
    preco: 1999.90,
    estoque: 15,
    categoria: "Eletrônicos"
  }
];

// GET /produtos - Listagem
router.get("/", (req, res) => {
  res.render("produtos/index", { produtos: produtos });
});

// GET /produtos/cadastro - Formulário de cadastro
router.get("/cadastro", (req, res) => {
  res.render("produtos/form-cadastro");
});

// POST /produtos - Receber dados do formulário
router.post("/", (req, res) => {
  const { nome, descricao, preco, estoque, categoria } = req.body;
  
  const novoProduto = {
    id: produtos.length + 1,
    nome: nome,
    descricao: descricao,
    preco: preco,
    estoque: estoque,
    categoria: categoria
  };

  produtos.push(novoProduto);
  res.redirect("/produtos");
});

module.exports = router;
