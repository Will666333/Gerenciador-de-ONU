const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');
const parser = require('./parser');

const app = express();

app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'meuusuario',
  password: 'minhasenha',
  database: 'meubanco'
});

app.get('/', (req, res) => {
  res.send('Bem-vindo à página inicial!');
});

app.get('/contato', (req, res) => {
  res.send('Entre em contato conosco!');
});

app.post('/formulario', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  res.send(`Obrigado por enviar o formulário, ${nome}!`);
});

app.get('/usuario/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Página do usuário com ID ${id}`);
});

app.post('/importar-dados', (req, res) => {
  const onusHuawei = parser.parseHuawei('./inputs/OntInfo - Huawei');
  const onusZTE = parser.parseZTE('./inputs/OntInfo - ZTE - SNs', './inputs/OntInfo - ZTE - SNs - State');

  onusHuawei.forEach(onu => {
    connection.query('INSERT INTO ONUs (slot, port, ont_id, sn, state, olt) VALUES (?, ?, ?, ?, ?, ?)', [onu.slot, onu.port, onu.ont_id, onu.sn, onu.state, 'Huawei']);
  });

  onusZTE.forEach(onu => {
    connection.query('INSERT INTO ONUs (slot, port, ont_id, sn, state, olt) VALUES (?, ?, ?, ?, ?, ?)', [onu.slot, onu.port, onu.ont_id, onu.sn, onu.state, 'ZTE']);
  });

  res.send('Dados importados com sucesso!');
});

app.get('/dados-onu', (req, res) => {
  connection.query('SELECT * FROM ONUs', (err, results, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar dados');
      return;
    }
    res.json(results);
  });
});

const port = 8080;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
