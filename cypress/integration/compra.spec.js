/// <reference types="cypress" />

context('Compra', () => {
  it('Efetuar uma compra de produto', () => {
    cy.visit('/')

    const nomeProduto = 'Faded Short Sleeve T-shirts'

    cy.contains(nomeProduto).trigger('mouseover')

    cy.contains(nomeProduto)
      .parent()
      .siblings('div.button-container')
      .children('a')
      .first()
      .click() // encontra o add to cart e clica

    // validando se o produto foi adicionado ao carrinho com sucesso
    cy.get('.icon-ok')
      .parent()
      .should(
        'contain.text',
        'Product successfully added to your shopping cart'
      )

    cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto)

    cy.get(".button-container a[href$='controller=order']").click()

    cy.get(".cart_navigation a[href$='order&step=1']").click()

    cy.get('#email').type('paula-agilizei@mail.com')
    cy.get('#passwd').type('teste123')
    cy.get('button#SubmitLogin').click()

    // validando se o endereço de entrega é igual ao se cobrança
    cy.get('[type=checkbox]#addressesAreEquals').should(
      'have.attr',
      'checked',
      'checked'
    )

    cy.get('[type=checkbox]#addressesAreEquals').should(
      'have.attr',
      'name',
      'same'
    )

    cy.get("button[name='processAddress']").click()

    cy.get('[type=checkbox]#cgv').check()

    cy.get("button[name='processCarrier']").click()

    cy.get('.bankwire').click()

    cy.get('.cart_navigation button[type=submit]')
      .find('span')
      .contains('I confirm my order')
      .click()

    cy.get('.cheque-indent strong').should(
      'contain.text',
      'Your order on My Store is complete.'
    )

    // capturar o texto do box
    cy.get('div.box')
      .invoke('text')
      .then((text) => {
        // filtrar o texto do box para extrair somente o id
        const id = text.match(/[A-Z][A-Z]+/g)[1]

        // armazenar o id do pedido em um arquivo
        cy.writeFile('cypress/fixtures/pedido.json', { id })
      })

    cy.get(".cart_navigation a[href$='history']").click()

    // leitura de um arquivo
    // obter o id do pedido armazenado
    cy.readFile('cypress/fixtures/pedido.json').then(({ id }) => {
      cy.get('tr.first_item td.history_link a').should('contain.text', id)
    })
  })
})
