<p align="center">
C-OUL
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/fallying/c-uol?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/fallying/c-uol">

  <a href="https://github.com/fallying/c-uol/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/fallying/c-uol">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/fallying/c-uol/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/fallying/c-uol?style=social">
  </a>
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-endpoints">Endpoints</a> •
 <a href="#-modelo-relacional">ER</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-como-executar-os-testes">Testes</a> •
</p>

## 💻 Sobre o projeto

A API permite criar usuários e associa-los a uma cidade. Neste projeto foram usandos alguns frameworks como forma de consolidar os estudos e testar diferentes cenários.

---

## 🛠 Endpoints

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run?label=c-uol&uri=https://github.com/fallying/c-uol/blob/main/endpoints.json)

## 🎨 Modelo Relacional

![](.github/assets/er.png)

---

## 🚀 Como executar o projeto

> Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
> [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/).
> Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando a aplicação pelo docker:

Instalando as dependências

Criando o container

```bash
docker-compose up --build
```

> Automaticamente as dependências serão baixadas, o clinte do prisma será gerado automaticamente e as migrations serão executadas. Por padrão, a aplicação estará disponível no endereço http://localhost:3333

### Rodando a aplicação sem o docker

Instale as dependências

```bash
yarn
```

Crie um banco de dados e altere as credenciais de acesso no [.env.development](./.env.development)

```bash
postgresql://username:password@host/database?schema=public
```

Execute a aplicação

```bash
yarn dev
```

## 🚀 Como executar os testes

> Por existirem testes de integração, é necessário um banco de testes.

Crie um banco de dados e altere as credenciais de acesso no [.env.test](./.env.test)

```bash
postgresql://username:password@host/database?schema=public
```

Execute os testes

```bash
yarn test
```
