import Login from "../pages/OldLoginogin";

const loginPage = new Login ();

describe("Test strony logowania z uyciem Page Object Pattern", ()  => {
    beforeEach(() => {
        loginPage.visit();
    });

    it("Prawidłowe elementy są widoczne na stronie logowania", () => {
        loginPage.vaildateLoginTitle();
        loginPage.vaildateInputs();
        loginPage.vaildateButton();
        loginPage.vaildatePasswordLink();
    });
});