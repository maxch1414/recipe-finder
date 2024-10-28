describe("Contact Form", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("should submit a valid contact form", () => {
    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Doe");
    cy.get('input[name="email"]').type("john.doe@example.com");
    cy.get('textarea[name="message"]').type(
      "This is a test message that is long enough to pass validation."
    );

    cy.get('button[type="submit"]').click();

    // Assuming you show a success message
    cy.contains("Message sent successfully").should("be.visible");
  });

  it("should show validation errors for invalid input", () => {
    cy.get('button[type="submit"]').click();

    // Check for validation error messages
    cy.contains("First name must be at least 2 characters long").should(
      "be.visible"
    );
    cy.contains("Last name must be at least 2 characters long").should(
      "be.visible"
    );
    cy.contains("Please enter a valid email address").should("be.visible");
    cy.contains("Message must be at least 10 characters long").should(
      "be.visible"
    );
  });
});
