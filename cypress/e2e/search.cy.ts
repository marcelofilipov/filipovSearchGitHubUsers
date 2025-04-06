describe('Busca de usuários do GitHub', () => {
  it('deve buscar um usuário existente e exibir os dados', () => {
    cy.visit('http://localhost:4200');

    cy.get('#username').type('marcelofilipov'); // mais seguro que usar placeholder
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/results/marcelofilipov');
    cy.contains('Repositórios');
    cy.get('[data-cy="repo-item"]').should('have.length.greaterThan', 0);
  });

  it('deve exibir mensagem de erro se o usuário não existir', () => {
    cy.visit('http://localhost:4200');

    cy.get('#username').type('usuarioinexistente123456');
    cy.get('button[type="submit"]').click();

    cy.contains('Usuário não encontrado');
  });
});
