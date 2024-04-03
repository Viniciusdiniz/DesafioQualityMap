## Automação Front-end e Back-end com playwright

### Descrição 
Boas vindas, este projeto é baseado em uma aplicação WEB e em uma API 

> Testes: 
Os testes WEB estão sendo executados nos arquivos:
cadastros.spec.js <----- Testes da aplicação WEB 
api_tests.spec.js <----- Testes de API 

> Ferramenta de automação de testes utilizadas no projeto:
Playwright [https://playwright.dev/] 

### Pré requisitos: 
Node.js [https://nodejs.org/]
VSCode [https://code.visualstudio.com/] 
NPM [https://www.npmjs.com/package/npm] 
Playwright [https://playwright.dev/] 

### Dependências do projeto: 
[@playwright/test] (https://www.npmjs.com/package/@playwright/test)
[@types/node] (https://www.npmjs.com/package/@types/node)
[dotenv] 

### Instalação e configuração do projeto 

1. No VS Code, clique em “File” e em seguida em “Open Folder”, ali você irá abrir a pasta em que deseja realizar o projeto.

2. Ao abrir o projeto, é necessário fazer a instalação e configurações de dependências do Playwright:

a. No terminal, execute o comando: `npm install playwright@latest` para instalar a ferramenta playwright na sua máquina;

b. Ainda no terminal, acesse a pasta que está localizado o projeto clonado e execute o comando: `npm install`para instalar as bibliotecas necessárias do projeto;

### Executando os testes 

Para executar os testes, no terminal do Vscode digite o comando: 

- npx playwright test --ui <----- Abrirá a interface do Playwright 

Outras formas de executar o projeto é 

- npm run test <--- Rodar os testes gerais
- npm run test-api <--- Rodar os testes de API
- npm run test-web <--- Rodar os testes web 


### Report

O report é gerado automaticamente pela ferramenta quando usamos o comando `npm run test`, para rodar os testes no terminal.

E também pode ser gerado o video evidenciando os testes com o comando `npm run report´

### Organização dos testes
- Na pasta **tests/** é onde ficam as suítes de teste em arquivos do tipo `.spec.js`que poderão ser executados 

- Na pasta **test-results/** é onde são guardados os resultados dos testes , junto com os prints das execuções.
