describe("Recipe Search and Filters", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("https://www.themealdb.com/api/json/v1/1/list.php?i=list").as(
      "searchIngredients"
    );
  });

  it("Should search for recipes and return results", () => {
    cy.wait("@searchIngredients");
    cy.get("#ingredient-select")
      .type("filo pastry")
      .type("Cypress{downArrow}{enter}")
      .type("minced beef")
      .type("Cypress{downArrow}{enter}")
      .type("onions")
      .type("Cypress{downArrow}{enter}")
      .type("oil")
      .type("Cypress{downArrow}{enter}")
      .type("salt")
      .type("Cypress{downArrow}{enter}")
      .type("pepper")
      .type("Cypress{downArrow}{enter}");

    cy.get('[data-testid="recipe-card"]').should("exist");
    // cy.contains("chicken", { matchCase: false }).should("exist");
  });

  //   it("should filter recipes by origin", () => {
  //     cy.get('select[placeholder="Select an origin"]').click();
  //     cy.get('select[value="Croatian"]').click();
  //     cy.get('[data-testid="recipe-card"]').should("exist");
  //   });

  //   it("should filter recipes by course", () => {
  //     cy.get('select[placeholder="Select a Course"]').click();
  //     cy.get('select[value="Side"]').click();
  //     cy.get('[data-testid="recipe-card"]').should("exist");
  //   });

  //   it("should clear filters", () => {
  //     // Set a filter
  //     cy.get('select[placeholder="Select an origin"]').click();
  //     cy.get('select[value="Italian"]').click();

  //     // Clear the filter
  //     cy.get('button[aria-label="Clear origin filter"]').click();
  //     cy.get('[data-testid="recipe-card"]').should("exist");
  //   });
});
