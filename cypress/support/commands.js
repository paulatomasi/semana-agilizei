// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
  cy.setCookie(
    'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
    'R6xmma6F4U6edNQuu67M0hYxR4%2B%2FlAZFvirac7xLGkeQmFTx3%2BrUaRYWvkxR9K8vfkncYrDEzD33mlCWJctoH2WJXm24jzyeKRHBBxK7HZA74BOZOAo8M4aJS1hdOoPNR%2Bj%2BtWPi34JxImiY3iN0MenjVVD82Vyi8w%2FSnc6kqw5qkvmnl0CDBpJ5HmMl%2Beshg5OJM6%2FWqEkUEj%2BQZngOG0oPpnQGnV6DS5JGRE%2Fh2BRDNwnS7YcdiSge0F%2F8YP%2BLIBWtOtNwdJllB0jvWch%2FPomx3wIj%2BGhMAOKtHkFV0O65ORRl5%2F7s5x2cgfeBlBcXfu0MSU%2Fnz0ZtWqpq3CAG%2F9f11pHrV6mWpT3tXBjfQrnd%2FMAYZ85wNqgcTzbApKQT9frBxrMbMiLjGEHO6laty%2FP8eDxBmt4Z0%2BPWNB%2B0VeaGMtEmHRrOA8%2Bq4qCVuXC7CBsA0hDC3iKJeiJD02ac5NDMkzZxxh0wKClGZHefDoY%3D000363'
  )
})
