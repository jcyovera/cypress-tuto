/// <reference types="cypress">
describe("Navigation menu Test", ()=>{
    it('Should navigate to conference session page', () => {
        cy.visit('http://localhost:1337/conference');
        cy.get('h1').contains("View Sessions").click();
        cy.url().should("include","/sessions");
    });
});