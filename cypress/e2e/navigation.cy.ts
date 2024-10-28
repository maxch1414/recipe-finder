describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to the home page", () => {
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("should navigate to the contact page", () => {
    cy.get('a[href="/contact"]').click();
    cy.url().should("include", "/contact");
  });
});
