# Gerenciador de ONUs

Este programa ajuda a organizar informações sobre ONUs, que são equipamentos usados em redes de internet. Ele permite ver, adicionar e organizar esses dados.

## Configuração do ambiente

### Pré-requisitos

* [Node.js](https://nodejs.org/)
* [MySQL](https://www.mysql.com/)
* [VS Code](https://code.visualstudio.com/)

### Passos de instalação

1. Instale o Node.js, MySQL e VS Code seguindo as instruções dos instaladores.
2. Abra o MySQL Workbench e crie um banco de dados chamado `meubanco`.
3. Crie uma tabela chamada `ONUs` com as colunas: `slot`, `port`, `ont_id`, `sn`, `state`, `olt`.

## Execução da aplicação

### Servidor

1. Navegue até a pasta `projeto-onu`.
2. Execute `npm install`.
3. Execute `node server.js`.

### Front-end

1. Navegue até a pasta `src`.
2. Execute `npm install`.
3. Execute `npm start`.

## Dependências

### Servidor

* Express.js
* MySQL2
* fs

### Front-end

* React
* Axios

## Utilização da aplicação

1. Abra o navegador em `http://localhost:3000`.
2. Clique no botão "Inserir Dados" para adicionar os dados dos arquivos `OntInfo - Huawei` e `OntInfo - ZTE - SNs` ao banco de dados.
3. A tabela exibirá as informações das ONUs.

## Estrutura de arquivos

* `projeto-onu/`: Pasta principal do projeto.
* `src/`: Código do front-end.
* `inputs/`: Arquivos de dados das ONUs.
* `server.js`: Código do servidor.
* `ListaONUs.js`: Componente da tabela de ONUs.
* `BotaoInserirDados.js`: Componente do botão de inserção de dados.

## Se você quiser ajudar

Se quiser melhorar a aplicação, fale com o responsável pelo projeto!

