// CAC-TAC.specs.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


///<referene types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function(){
        cy.visit ('./src/index.html')
        cy.title ().should('be.eq', 'Central de Atendimento ao Cliente TAT')
    })    
})