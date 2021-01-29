describe("forms", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/pizza")
    })
    it("can get the name, and type it in", () => {
        cy.get('input[name="name"]').should('have.value', '')
        .type('Courtney')
        .should("have.value", "Courtney")
    });
    it("can check for box to be checked and un-checked", () => {
        cy.get('input[name="pepperoni"]').check()
        cy.get('input[name="pepperoni"]').uncheck()
        cy.get('input[name="peppers"]').check()
        cy.get('input[name="peppers"]').uncheck()
        cy.get('input[name="onion"]').check()
        cy.get('input[name="onion"]').uncheck()
        cy.get('input[name="spinach"]').check()
        cy.get('input[name="spinach"]').uncheck()
    });
    it("check if user can submit", () => {
        cy.get('button').should("be.disabled")
        cy.get('input[name="name"]').type('have a valid name')
        cy.get('select').select('small')
        cy.get('button').should('be.enabled').click()
    })
});
