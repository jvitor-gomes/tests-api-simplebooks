
# :mag_right: SimpleBooks Tests

##  Sobre o Projeto
A estrutura do projeto foi planejada visando a organização e facilidade de manutenção dos testes automatizados. 

Os testes foram agrupados em subpastas dentro de `cypress/e2e/api`, como `Livros/` e `Pedidos/`, para uma melhor organização e legibilidade. 

A reutilização de código foi incentivada através de utilitários em `cypress/utils/` e comandos personalizados em `cypress/support/commands.js`, promovendo uma abordagem eficiente e livre de duplicações. 

Configurações específicas do Cypress foram mantidas em `cypress.config.js`, enquanto os relatórios foram centralizados em `cypress/reports/`, simplificando a configuração e fornecendo insights claros sobre o estado dos testes. 

Essa arquitetura foi projetada para suportar a escalabilidade do projeto, permitindo a adição de novos testes e funcionalidades sem comprometer a estrutura existente. 

Em poucas palavras, a estrutura do projeto visa promover uma abordagem organizada, legível e adaptável para os testes automatizados, facilitando o desenvolvimento contínuo e colaboração de outros membros da equipe.

##  Objetivo
O projeto consiste em testes automatizados para a API SimpleBooks utilizando Cypress. Os testes cobrem várias funcionalidades da API, incluindo operações com livros, pedidos, registro de cliente e status.

## Estrutura do Projeto
```
TESTS-API-SIMPLEBOOKS
├── cypress
│   ├── e2e
│   │   └── api
│   │       ├── Livros/
│   │       │   ├── listarLivros.cy.js
│   │       │   └── obterLivro.cy.js
│   │       ├── Pedidos/
│   │       │    ├── atualizarPedido.cy.js
│   │       │    ├── criarPedido.cy.js
│   │       │    ├── excluirPedido.cy.js
│   │       │    ├── listarPedidos.cy.js
│   │       │    └── obterPedido.cy.js
│   │       ├── registrarCliente.cy.js
│   │       └── status.cy.js
│   ├── fixtures/
│   ├── reports/
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── utils/
│   │   ├── livros.js
│   │   └── pedidos.js
│   └── videos/
├── node_modules/
├── .env
├── cypress.config.js
├── package-lock.json
└── package.json
```

## Requisitos
- Node.js (versão 18 ou superior)
- NPM (Node Package Manager)
- GIT

## Tecnologias utilizadas
- Node.js
- JavaScript
- NPM
- Cypress
- Mochawesome Reporter
- Dotenv


## Instalação
Clone o repositório:
```
git clone https://github.com/jvitor-gomes/tests-api-simplebooks.git
``` 
<br>
Abra a pasta do projeto:

```
cd tests-api-simplebooks
```
<br>
Instale as dependências:

```
npm install
```

## Estrutura de testes
Os testes estão organizados nas seguintes pastas:

-   `cypress/e2e/api/Livros/`: Contém testes para operações relacionadas aos livros.
-   `cypress/e2e/api/Pedidos/`: Contém testes para operações relacionadas aos pedidos.
-   `cypress/e2e/api/registrarCliente.cy.js`: Teste de registro do cliente, para validação do token de autenticação.
-   `cypress/e2e/api/status.cy.js`:  Teste para verificar o status da API.

## Arquivos Importantes
-   `cypress/support/commands.js`: Define comandos personalizados do Cypress.
-   `cypress/support/e2e.js`: Importa os comandos personalizados e configura o relatório Mochawesome.
-   `cypress/utils/livros.js`: Contém funções utilitárias para interagir com a API de livros.
-   `cypress/utils/pedidos.js`: Contém funções utilitárias para interagir com a API de pedidos.
-   `cypress.config.js`: Configurações do Cypress e do Mochawesome.

## Executando os Testes

### Executar testes no modo interativo
Para abrir a interface gráfica do Cypress e executar os testes no modo interativo, use o comando:
`npx cypress open` 

Na interface que irá abrir, selecione o teste que deseja executar.

### Executar todos os testes
Para executar todos os testes de forma automatizada direto no terminal, use o comando: 

`npx cypress run` 

Após a finalização dos testes, os relatórios gerados pelo Mochawesome poderão ser encontrados no seguinte caminho "cypress\reports".

## Relatórios
Os relatórios dos testes são gerados pelo `cypress-mochawesome-reporter` e são salvos na pasta `cypress/reports`, como um arquivo `index.html`
Para visualização do relatório, é necessário abrir o arquivo no navegador de sua preferência.

## Conclusão
Estou disponível para explicação detalhada sobre o projeto, assim como para qualquer assistência adicional necessária.

<div align="left"> <h4>< Contato ></h4> </div>

👤 Autor: João Vitor Gomes <br>
📧 Email: bgomes.joaovitor@gmail.com
