const express = require("express");
const router = express.Router();

// DADOS
let clientes = [
  {
    id: 1,
    nome: "João",
    email: "joao@email.com",
    telefone: "123456789",
    cidade: "São Paulo"
  },
  {
    id: 2,
    nome: "Maria",
    email: "maria@email.com",
    telefone: "987654321",
    cidade: "Rio de Janeiro"
  },
  {
    id: 3,
    nome: "Pedro",
    email: "pedro@email.com",
    telefone: "111111111",
    cidade: "Belo Horizonte"
  }
];

router.get('/', (req, res) => {
    res.render('clientes/index', { 
      clientes: clientes
    });
});


router.get("/cadastro", (req, res) => {
  res.render("clientes/form-cadastro");
});

router.post("/", (req, res) => {
  const { nome, email, telefone, cidade } = req.body;
  const novoCliente = {
    id: clientes.length + 1,
    nome: nome,
    email: email,
    telefone: telefone,
    cidade: cidade
  };
  clientes.push(novoCliente);
  res.redirect("/clientes");
});

module.exports = router;
