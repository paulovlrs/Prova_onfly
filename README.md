# 🧪 Projeto de Automação - Onfly Prova

Este projeto contém **testes automatizados** utilizando [Playwright](https://playwright.dev/) para validar funcionalidades do site **Mercado Livre**, como busca dos Cavaleiros do Zodiaco, validação de preços, informações de vendedores e botões de compra.  

---

## 🚀 Tecnologias Utilizadas

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- Visual Studio Code

---

## ✅ Funcionalidades Testadas

- Navegação até a página inicial  
- Busca por produto  
- Validação de título e preço  
- Verificação do nome do vendedor  
- Presença dos botões **"Comprar agora"** e **"Adicionar ao carrinho"**  
- Exibição de produtos relacionados  

---

## 📦 Instalação

> ⚠️ Caso esteja utilizando **PowerShell** e não tenha permissão de execução, rode o comando abaixo antes da instalação:

```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### 1. Inicializar o projeto Node.js
```bash
npm init -y
```

### 2. Instalar o Playwright
```bash
npm install -D @playwright/test
```

### 3. Instalar os navegadores suportados (Chromium, Firefox e WebKit)
```bash
npx playwright install
```

---

## ▶️ Como Executar os Testes

Para rodar os testes automatizados:  

```bash
npx playwright test tests/search.spec.ts
```

---

## 📄 Gerar Relatório de Testes

Após a execução, você pode abrir o relatório HTML com:  

```bash
npx playwright show-report
```
