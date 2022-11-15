
# Talker Manager

Talker Manager foi proposto como uma atividade de aprimoramento dos meus estudos sobre desenvolvimento de API. 
O projeto permitiu colocar em prática o que aprendi sobre Node.js, Express.js, JWT e Protocolos HTTP durante o módulo Back-end na [Trybe](https://www.betrybe.com/).

## Objetivo

Desenvolver uma API CRUD (Criar, Ler, Atualizar e Deleta) de palestrantes, que possui um token necessário para acessar os demais endpoints que permite o usuário interagir. As informações precisam ser gravada em um arquivo JSON, usando os Core Modules do Node.js.

## Tecnologias e Ferramentas
<div>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker"/>
    <img src="https://camo.githubusercontent.com/92407fc26e09271d8137b8aaf1585b266f04046b96f1564dfe5a69f146e21301/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73266c6f676f436f6c6f723d7768697465" alt="jwt"/>
</div>

<br>

Na elaboração da API RESTful, tentei organizar o projeto com a arquitetura MSC (Model-Service-Controller), mesmo não existindo uma model, já que os dados armazenados da API fica em arquivo JSON.

## ⚙️ Execução

<details>
  <summary>Clique para expandir!</summary>

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

    git clone git@github.com:guilhermepallma/talker-manager.git

Navegue até a raíz do projeto.

    cd talker-manager/

  Na raíz do projeto execute o comando abaixo para instalar as dependências.

    npm install

  Para subir o servidor com o <strong>nodemon</strong> utilize o comando abaixo no terminal dentro do projeto.
    
    npm run dev
    
</details>

## Documentação da API

<details>
  <summary>Clique para expandir!</summary>

### Retorna o token necessário para acessar os demais endpoints da API. 

```http
  POST /login
```
#### Exemplo de valores:
```
{
  "email": "email@email.com",
  "password": "123456"
}
```
##

### Retorna todos os palestrantes cadastrados.

```http
  GET /talker
```
##

### Retorna um palestrante pelo id.

```http
  GET /talker/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do palestrante que deseja retorna. |


##

### Retorna um palestrante pelo nome.

```http
  GET /talker/search?q=searchTerm
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `searchTerm`      | `string` | **Obrigatório**. O nome que deseja retorna. |


##

### Cadastra um novo palestrante.

```http
  POST /talker
```
#### Exemplo de valores:
```
{
  "name": "Gabigol",
  "age": 25,
  "talk": {
    "watchedAt": "28/10/2022",
    "rate": 3
  }
}
```
##

### Atualiza os dados de um palestrante cadastrado.

```http
  PUT /talker/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do palestrante que deseja atualizar. |

 **OBS**: Os valoes que podem ser editados, são os mesmo necessários para cadastrar.

##

### Retorna um palestrante pelo nome.

```http
  DELETE /talker/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do palestrante que deseja **DELETAR**. |

##

</details>

Desenvolvido por [Guilherme Palma](www.linkedin.com/in/guilhermepallma) © 2022.
