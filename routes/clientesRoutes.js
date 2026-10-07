const express = require("express");
const router = express.Router();

// DADOS (Em memória)
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

// LISTAR CLIENTES
router.get('/', (req, res) => {
    res.render('clientes/index', { 
      clientes: clientes
    });
});

// FORMULÁRIO DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("clientes/form-cadastro");
});

// SALVAR CADASTRO (POST)
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

// EXCLUIR CLIENTE
router.get("/excluir/:id", (req, res) => {
  let id = parseInt(req.params.id);
  clientes = clientes.filter(c => c.id !== id); 
  res.redirect("/clientes"); 
});

// EDITAR CLIENTE - FORMULÁRIO (GET)
router.get("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let cliente = clientes.find(c => c.id === id); 

  if(!cliente) {
    return res.redirect("/clientes");
  }
  res.render("clientes/editar", { cliente: cliente }); 
});

// EDITAR CLIENTE - SALVAR (POST)
router.post("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let cliente = clientes.find(c => c.id === id); 
  
  if (cliente) {
    const { nome, email, telefone, cidade } = req.body; 
    cliente.nome = nome;
    cliente.email = email;
    cliente.telefone = telefone;
    cliente.cidade = cidade;
  }
  res.redirect("/clientes"); 
});

module.exports = router;
