/// <reference types="cypress">
describe('Sessions page Test', () => {

  beforeEach(() => {
    cy.clickViewSession();
    cy.url().should('include', '/sessions');
    //Aliases
    cy.get('[data-cy=AllSessions]').as("AllSessionsBtn");
    cy.get('[data-cy=Wednesday]').as("WednesdayBtn");
    cy.get('[data-cy=Thursday]').as("ThursdayBtn");
    cy.get('[data-cy=Friday]').as("FridayBtn");

  });

  it('Should navigate to conference sessions page and view filters button', () => {
    cy.get('@AllSessionsBtn');
    cy.get('@WednesdayBtn');
    cy.get('@ThursdayBtn');
    cy.get('@FridayBtn');
  });
  it('Should filter sessions by Wednesday button and only show the data for it.', () => {
    cy.get('@WednesdayBtn').click();
    cy.get('[data-cy=day]').should('have.length', 21);
    cy.get('[data-cy=day]').contains("Wednesday").should("be.visible");
    cy.get('[data-cy=day]').contains("Thursday").should("not.exist");
    cy.get('[data-cy=day]').contains("Friday").should("not.exist");
  });
});
