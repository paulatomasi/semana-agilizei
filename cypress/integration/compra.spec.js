/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        cy.visit('/')

        const nomeProduto = 'Faded Short Sleeve T-shirts'
        
        cy.contains(nomeProduto).trigger('mouseover')

        cy.contains(nomeProduto)
            .parent().siblings('div.button-container')
            .children('a').first().click() // encontra o add to cart e clica

        cy.get(".button-container a[href$='controller=order']").click()

        cy.get(".cart_navigation a[href$='order&step=1']").click()

        cy.get('#email').type('paula-agilizei@mail.com')
        cy.get('#passwd').type('teste123')
        cy.get('button#SubmitLogin').click()

        cy.get("button[name='processAddress']").click()

        cy.get('[type=checkbox]#cgv').check()

        cy.get("button[name='processCarrier']").click()

        cy.get('.bankwire').click()

        cy.get('.cart_navigation button[type=submit]').find('span').contains('I confirm my order').click()

        cy.get('.cheque-indent strong').should('contain.text', 'Your order on My Store is complete.')
    })
})