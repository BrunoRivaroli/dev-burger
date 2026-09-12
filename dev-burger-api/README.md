# 🍔 Dev Burger API

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.0-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v14%2B-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Sequelize](https://img.shields.io/badge/Sequelize-ORM-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/)
[![Biome](https://img.shields.io/badge/Biome-Linter%20%26%20Formatter-60A5FA?style=for-the-badge&logo=biome&logoColor=white)](https://biomejs.dev/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

> API Backend RESTful para gerenciamento completo de hamburgueria e sistema de pedidos.

---

## 📌 Sobre o Projeto

O **Dev Burger** é uma aplicação backend desenvolvida para alimentar sistemas de hambúrgueres e restaurantes. O projeto oferece uma arquitetura estruturada, escalável e moderna para gerenciamento de usuários, produtos, categorias e pedidos.

### 🚀 Principais Funcionalidades
- **Gestão de Usuários:** Cadastro, autenticação e controle de permissões (administrador e clientes).
- **Mapeamento de Banco de Dados Relacional:** Estruturado com PostgreSQL e Sequelize ORM com suporte a migrations.
- **Suporte a ES Modules (ESM):** Código moderno utilizando a sintaxe nativa de módulos JavaScript.
- **Padronização de Código:** Qualidade e formatação garantidas com Biome.js.

---

## 🛠️ Tecnologias Utilizadas

As principais ferramentas e tecnologias empregadas no desenvolvimento desta API são:

- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript server-side.
- **[Express.js](https://expressjs.com/):** Framework web rápido e minimalista para Node.js (v5.x).
- **[PostgreSQL](https://www.postgresql.org/):** Sistema de gerenciamento de banco de dados relacional (SGBD).
- **[Sequelize ORM](https://sequelize.org/):** Object-Relational Mapper para Node.js para interação com o banco de dados.
- **[Sequelize CLI](https://github.com/sequelize/cli):** Interface de linha de comando para gerenciamento de migrations e models.
- **[Biome](https://biomejs.dev/):** Ferramenta ultra-rápida de formatação e linting de código.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão `18.x` ou superior recomendada para suporte ao recurso `--watch`).
- **[pnpm](https://pnpm.io/)**, **[npm](https://www.npmjs.com/)** ou **[yarn](https://yarnpkg.com/)**.
- **[PostgreSQL](https://www.postgresql.org/)** rodando localmente ou via container Docker.

---

## 🔧 Instalação e Configuração

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/dev-buger.git
cd dev-buger
```

### 2. Instalar as dependências
Utilizando o seu gerador de pacotes preferido:
```bash
# Usando pnpm (recomendado)
pnpm install

# Ou usando npm
npm install
```

### 3. Configuração do Banco de Dados
A conexão com o banco de dados PostgreSQL está configurada no arquivo `src/config/database.cjs`.

Por padrão, a aplicação espera as seguintes credenciais:
```javascript
module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "YOUR_PASSWORD",
  database: "dev-burger-db",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
```

> **Dica:** Certifique-se de que o banco de dados `dev-burger-db` exista no seu PostgreSQL antes de rodar as migrations.

### 4. Executar as Migrations
Para criar as tabelas necessárias no banco de dados, execute:
```bash
npx sequelize-cli db:migrate
```

---

## ⚙️ Como Executar

### Modo de Desenvolvimento
Para iniciar a aplicação em modo de desenvolvimento com recarregamento automático (`--watch` nativo do Node.js):

```bash
npm run dev
```

A aplicação estará acessível em `http://localhost:3001`.

---

## 🧪 Outros Comandos Úteis

### Verificar e formatar o código com Biome
```bash
# Verificar problemas de lint e formatação
npx @biomejs/biome check .

# Aplicar correções e formatação automaticamente
npx @biomejs/biome check --write .
```

---

## 📁 Estrutura do Projeto

```text
Dev Buger/
├── src/
│   ├── app/
│   │   └── models/        # Modelos da aplicação (Sequelize)
│   ├── config/
│   │   └── database.cjs   # Configuração de conexão do PostgreSQL
│   ├── database/
│   │   └── migrations/    # Migrações do banco de dados (ex: tabela users)
│   ├── app.js             # Configuração e rotas do Express
│   └── server.js          # Ponto de entrada da aplicação (porta 3001)
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── .sequelizerc           # Mapeamento de caminhos para o Sequelize CLI
├── package.json           # Dependências e scripts da aplicação
├── pnpm-lock.yaml         # Lockfile do pnpm
└── README.md              # Documentação do projeto
```

---

## 📄 Licença e Autor

Este projeto está sob a licença **ISC**.

Desenvolvido por **[Bruno Souza](https://github.com/)**. Sinta-se à vontade para entrar em contato ou contribuir com melhorias!
