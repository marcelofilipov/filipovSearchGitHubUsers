# filipovSearchGitHubUsers

Aplicação Angular para buscar usuários e repositórios públicos do GitHub.

## 🚀 Funcionalidades

- 🔍 Busca por nome de usuário do GitHub
- 👤 Exibição de perfil do usuário (avatar, bio, etc.)
- 📆 Listagem dos repositórios públicos
- ⬆️ Ordenação por nome ou número de estrelas
- 📄 Detalhamento de repositório individual
- 🔙 Botão "Voltar" para facilitar navegação

## 📷 Capturas de Tela

Em breve...

## 🛠️ Tecnologias Utilizadas

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [RxJS](https://rxjs.dev/)
- [Cypress](https://www.cypress.io/) – testes E2E
- [Karma + Jasmine](https://karma-runner.github.io/latest/index.html) – testes unitários

## ⚙️ Instalação

```bash
git clone https://github.com/seu-usuario/filipovSearchGitHubUsers.git
cd filipovSearchGitHubUsers
npm install
```

## ▶️ Execução da Aplicação

```bash
npm start
# ou
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

## 🧚‍♂️ Testes

### Unitários (Karma + Jasmine)

```bash
npm test
```

### E2E (Cypress)

```bash
# Inicie a aplicação localmente:
npm start

# Em outro terminal:
npx cypress open
```

> Os testes E2E ficam na pasta: `cypress/e2e/`

## 🧼 Boas Práticas

- Componentização e separação de responsabilidades
- Uso de `Models` fortemente tipados (`User`, `Repo`)
- Cobertura de testes em todos os fluxos principais
- Tratamento de erros com mensagens amigáveis
- Código limpo e legível com uso de Angular idiomático

## ✅ Requisitos Atendidos

- [x] Busca e navegação por username
- [x] Exibição de dados do usuário
- [x] Listagem e ordenação de repositórios
- [x] Detalhes do repositório acessível por rota
- [x] Testes unitários com alta cobertura
- [x] Testes end-to-end com Cypress (em progresso)
- [x] Acessibilidade básica e mensagens de erro amigáveis

## 📁 Estrutura de Pastas

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

## 👨‍💻 Autor

**[Seu Nome Aqui]**  
[LinkedIn](https://www.linkedin.com/in/seunome/) • [GitHub](https://github.com/seu-usuario)
