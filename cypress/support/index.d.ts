/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Comando para executar o login em background
     * @example
     * cy.backgroundLogin()
     *
     */
    backgroundLogin(): Chainable<any>
  }
}
