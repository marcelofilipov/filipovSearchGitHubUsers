import { mount } from 'cypress/angular';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

export {}; // Garante que o arquivo seja tratado como um módulo
