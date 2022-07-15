/* eslint-disable no-undef */

/// <reference types="cypress" />

describe("Accomplishments Dashboard", () => {
	beforeEach(() => {
		cy.visit("/accomplishments");
	});

	it("checking for error message on invald entry", () => {
		cy.get("[data-cy='accomplishment-title-input']").type("Shid pants");

		cy.get("[data-cy='accomplishment-input']").type(
			"I shid my pants at the correct time"
		);
		cy.contains("Submit Accomplishment").click();
		cy.contains("Complete the items above to continue").should("be.visible");
	});
	it("Submit valid accomplishment and then check for landing page", () => {
		cy.get("[data-cy='accomplishment-title-input']").type("Shid pants");

		cy.get("[data-cy='accomplishment-input']").type(
			"I shid my pants at the correct time!!!!"
		);
		cy.get("input[type='checkbox']").click();
		cy.contains("Submit Accomplishment").click();

		cy.contains("This Accomplisment was Successfully Submitted").should(
			"be.visible"
		);
	});
	it("Returns back to accomplishment dashboard", () => {
		cy.get("[data-cy='accomplishment-title-input']").type("Shid pants");

		cy.get("[data-cy='accomplishment-input']").type(
			"I shid my pants at the correct time!!!!"
		);
		cy.get("input[type='checkbox']").click();
		cy.contains("Submit Accomplishment").click();

		cy.contains("This Accomplisment was Successfully Submitted").should(
			"be.visible"
		);
		cy.contains("Go Back").click();

		cy.contains("h2", "Accomplishment").should("be.visible");
		cy.get("[data-cy='accomplishment-title-input']").should("have.value", "");
		cy.get("[data-cy='accomplishment-input']").should("have.value", "");
		cy.get("input[type='checkbox']").should("not.be.checked");
	});
});
