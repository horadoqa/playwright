# playwright
Playwright enables reliable end-to-end testing for modern web apps.

Criar testes com Playwright é uma ótima maneira de automatizar a interação com aplicações web. 

Aqui está um guia básico para você começar:

1. Instalação

Primeiro, você precisa instalar o Playwright. Se você estiver usando Node.js, execute o seguinte comando:

```bash
npm init -y
npm install playwright
npx playwright install
```

Instalar a extensão no code

Procurar por Playwright

Playwright Test for VSCode
v1.1.7

Depois fazer a instalação da extensão, acessar a paleta de comandos `ctrl + shift + p` e usar o seguinte comando: install Playwright

2. Executando o Teste

Para executar o teste: acessar o diretório com o script:

```bash
cd globo
```
[script](./e2e/globo/)

```bash
npx playwright test

Running 1 test using 1 worker

  ✓  1 globo..spec.ts:3:5 › has title (5.3s)

  1 passed (6.0s)
```