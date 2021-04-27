<h1 align="center">
    <img alt="VUTTR" title="VUTTR" src="./.github/bossabox.png" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leocairos/vuttr-backend?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/leocairos/vuttr-backend">

  <a href="https://github.com//leocairos/vuttr-backend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/leocairos/vuttr-backend">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/leocairos/vuttr-backend/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/leocairos/vuttr-backend?style=social">
  </a>

  <a href="https://www.linkedin.com/in/leonardo-sampaio-cairo-54a74756/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue">
  </a>
</p>

# VUTTR API

This respository has a simple API to BossaBox challenge backend.

Require:
  * NodeJS v14.16.0+
  * Docker
  * vscode

## How to execute

* Clone this repository
* Install docker
* Install Docker Plugin for vscode
* Update Dockerfile file in root path project
* Update .dockerignore file in root path project
* Build a docker image file (run in root path project):
  ```bash
  docker build -t vuttr .
  ```
* Update a docker-compose.yml file
* run compose: $ docker-compose up (with -d to background run)


## Documentação da API - by [SWAGGER](https://swagger.io/)

Run project and open API Doc in http://[addressServer]:[portServer]/[api-doc-route-path] (ex: http://localhost:3000/api-docs)

## Rotas

Todas as requisições de POST para esta API devem conter o header `Content-Type: application/json`.
Esta API contém as seguintes rotas:

* `GET /tools` : lista as ferramentas cadastradas
* `POST /tools` : cria uma nova ferramenta
* `DELETE /tools/:id` : apaga a ferramenta com ID :id

Para filtrar as ferramentas em `GET /tools`, é possível:
* fazer uma busca global utilizando a query string `?q=:busca`;
* fazer uma busca por tags individuais utilizando a query string `?tags_like=:busca`.

## Exemplos

### GET /tools

Requisição:
```javascript
GET /tools
```
Resposta:
```javascript
[
    {
        id: 1,
        title: "Notion",
        link: "https://notion.so",
        description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
        tags: [
            "organization",
            "planning",
            "collaboration",
            "writing",
            "calendar"
        ]
    },
    {
        id: 2,
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: [
            "api",
            "json",
            "schema",
            "node",
            "github",
            "rest"
        ]
    },
    {
        id: 3,
        title: "fastify",
        link: "https://www.fastify.io/",
        description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        tags: [
            "web",
            "framework",
            "node",
            "http2",
            "https",
            "localhost"
        ]
    }
]
```

### GET /tools?q=:busca

Requisição:
```javascript
GET /tools?q=notion
```
Resposta:
```javascript
[
    {
        id: 1,
        title: "Notion",
        link: "https://notion.so",
        description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
        tags: [
            "organization",
            "planning",
            "collaboration",
            "writing",
            "calendar"
        ]
    }
]
```

### GET /tools?tags_like=:busca

Requisição:
```javascript
GET /tools?tags_like=node
```
Resposta:
```javascript
[
    {
        id: 2,
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: [
            "api",
            "json",
            "schema",
            "node",
            "github",
            "rest"
        ]
    },
    {
        id: 3,
        title: "fastify",
        link: "https://www.fastify.io/",
        description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        tags: [
            "web",
            "framework",
            "node",
            "http2",
            "https",
            "localhost"
        ]
    }
]
```

### POST /tools

Requisição:
```javascript
// POST /tools
// Content-Type: application/json
{
    "title": "hotel",
    "link": "https://github.com/typicode/hotel",
    "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
    "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
}
```

Resposta:
```javascript
{
    "title": "hotel",
    "link": "https://github.com/typicode/hotel",
    "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
    "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"],
    "id":5
}
```

### DELETE /tools/:id
Requisição:
```javascript
DELETE /tools/5
```

Resposta:
```javascript
// Status: 200 OK
{}
```

## Rodmap

**O mínimo necessário**
- [ ] Uma aplicação contendo uma API real simples, sem autenticação, que atenda os requisitos descritos abaixo, fazendo requisições à um banco de dados para persistência;
- [ ] README.md contendo informações básicas do projeto e como executá-lo;
- [ ] API Blueprint ou Swagger da aplicação

**Bônus**
- [ ] Uso de ferramentas externas que facilitem o seu trabalho;
- [ ] Cuidados especiais com otimização, padrões, entre outros;
- [ ] Migrations ou script para configuração do banco de dados utilizado;
- [ ] Testes (unitários, integração);
- [ ] Conteinerização da aplicação;
- [ ] Autenticação e autorização (OAuth, JWT);
- [ ] Pipelines de CI/CD (GitLab, CircleCI, TravisCI, etc);
- [ ] Deploy em ambientes reais, utilizando serviços de cloud externos (AWS, Heroku, GCP, etc);
- [ ] Sugestões sobre o challenge embasadas em alguma argumentação.


## 📝 Licença

Este projeto esta sob a licença MIT.

Feito com ❤️ por [Leonardo Cairo](https://www.linkedin.com/in/leonardo-sampaio-cairo-54a74756/)!
