describe('Test on local srv', () => {
  it('passes', () => {
    cy.visit('http://localhost/')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('.navbar-brand').click()
    cy.url().should('include', '/localhost')
    cy.getCookie('your-session-cookie').should('exist')
  })
  
})