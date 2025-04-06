# 🔍 filipovSearchGitHubUsers

Aplicação Angular para buscar e visualizar usuários e repositórios públicos do GitHub.

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://filipov-search-github-users.vercel.app/)
[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge)]()

---

## 🌐 Demo

Acesse a aplicação online clicando aqui:  
👉 [**filipov-search-github-users.vercel.app**](https://filipov-search-github-users.vercel.app/)

---

## 🚀 Funcionalidades

- 🔍 Busca por nome de usuário do GitHub
- 👤 Exibição de perfil do usuário (avatar, bio, etc.)
- 📁 Listagem de repositórios públicos
- ⬆️ Ordenação por nome ou número de estrelas
- 📄 Detalhamento de repositório individual
- 🔙 Navegação com botão "Voltar"

---

## 🖼️ Capturas de Tela

_(Em breve, serão adicionadas aqui capturas ilustrando o uso da aplicação.)_

---

## 🛠️ Tecnologias Utilizadas

- **[Angular](https://angular.io/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[SCSS](https://sass-lang.com/)**
- **[RxJS](https://rxjs.dev/)**
- **[Cypress](https://www.cypress.io/)** – testes E2E
- **[Karma + Jasmine](https://karma-runner.github.io/latest/index.html)** – testes unitários

---

## ⚙️ Instalação

```bash
git clone https://github.com/marcelo-filipov/filipovSearchGitHubUsers.git
cd filipovSearchGitHubUsers
npm install
```

---

## ▶️ Execução

```bash
npm start
# ou
ng serve
```

Acesse no navegador: [http://localhost:4200](http://localhost:4200)

---

## 🧪 Testes

### ✅ Unitários (Karma + Jasmine)

```bash
npm test
```

### 🧪 End-to-End (Cypress)

```bash
# Inicie a aplicação em um terminal:
npm start

# Em outro terminal:
npx cypress open
```

> Os testes E2E estão em `cypress/e2e/`

---

## ✅ Requisitos Atendidos

- [x] Busca e navegação por username
- [x] Exibição de dados do usuário
- [x] Listagem e ordenação de repositórios
- [x] Detalhes do repositório acessível por rota
- [x] Testes unitários com alta cobertura
- [x] Testes end-to-end com Cypress (em progresso)
- [x] Acessibilidade básica e mensagens de erro amigáveis

---

## 🧼 Boas Práticas

- Componentização e separação de responsabilidades
- Models fortemente tipados (`User`, `Repo`)
- Cobertura de testes para os principais fluxos
- Tratamento de erros com feedbacks amigáveis
- Código limpo e legível com boas práticas Angular

---

## 🗂️ Estrutura de Pastas

```
src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   └── models/
│   ├── features/
│   │   ├── search/
│   │   ├── results/
│   │   └── repo-detail/
```

---

## 👨‍💻 Autor

**Marcelo Filipov**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/marcelo-filipov-mba-a902b49/)  
[![GitHub](https://img.shields.io/badge/GitHub-000?style=flat&logo=github)](https://github.com/marcelofilipov)
