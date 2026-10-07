const express = require("express");
const router = express.Router();

let fornecedores = [
  {
    id: 1,
    nome: "Tech Distribuidora",
    cnpj: "12.345.678/0001-99",
    telefone: "11 99999-1111",
    email: "contato@techdistribuidora.com"
  },
  {
    id: 2,
    nome: "Eletrônicos Atacado",
    cnpj: "98.765.432/0001-00",
    telefone: "21 88888-2222",
    email: "vendas@eletronicosatacado.com"
  }
];

router.get("/", (req, res) => {
  res.render("fornecedores/index", { fornecedores: fornecedores });
});

router.get("/cadastro", (req, res) => {
  res.render("fornecedores/form-cadastro");
});

router.post("/", (req, res) => {
  const { nome, cnpj, telefone, email } = req.body;

  const novoFornecedor = {
    id: fornecedores.length + 1,
    nome: nome,
    cnpj: cnpj,
    telefone: telefone,
    email: email
  };

  fornecedores.push(novoFornecedor);
  res.redirect("/fornecedores");
});

// Excluir fornecedor
router.get("/excluir/:id", (req, res) => {
  let id = parseInt(req.params.id);
  fornecedores = fornecedores.filter(f => f.id !== id);
  res.redirect("/fornecedores");
});

// Editar - form - get
router.get("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let fornecedor = fornecedores.find(f => f.id === id);

  if(!fornecedor) {
    return res.redirect("/fornecedores");
  }
  res.render("fornecedores/editar", { fornecedor: fornecedor });
});

// Editar - efetiva - post
router.post("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let fornecedor = fornecedores.find(f => f.id === id);
  if (fornecedor) {
    const { nome, cnpj, telefone, email } = req.body;
    fornecedor.nome = nome;
    fornecedor.cnpj = cnpj;
    fornecedor.telefone = telefone;
    fornecedor.email = email;
  }
  res.redirect("/fornecedores");
});

module.exports = router;
