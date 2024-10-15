describe("User can visit GoIT page", () => {
    beforeEach("Go to page", () => {
        cy.visit("https://www.edu.goit.global/account/login");
    })
   
    it("First log in", () => {
        cy.fixture('userData').then((user) => {
            cy.get("#user_email").type(user.email);
            cy.get("input[type=password]").type(user.password);
            cy.get('.eckniwg2').click()
            cy.get('#open-navigation-menu-mobile').click()
            cy.get(':nth-child(12) > .n bve2vl ext-').click()
        })
    })

    it("Second log in", () => {
            cy.get("#user_email").type("testowyqa@qa.team");
            cy.get("input[type=password]").type("QA!automation-1");
            cy.get('.eckniwg2').click()
            cy.get('#open-navigation-menu-mobile').click()
            cy.get(':nth-child(12) > .n bve2vl ext-').click()
    })
})  
    