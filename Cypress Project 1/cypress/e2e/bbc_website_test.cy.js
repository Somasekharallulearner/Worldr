describe('BBC Website Test', () => {
  it('should navigate to the News page', () => {
    cy.visit('https://www.bbc.co.uk')
    cy.get('.ssrcss-684v2a-NavItemHoverState').click()
    cy.url().should('include', '/news')
    cy.get('.nw-c-nav__wide-secondary > .gs-o-list-ui--top-no-border > :nth-child(8) > .nw-o-link > span').should('be.visible')
  })
})

