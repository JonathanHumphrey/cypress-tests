/* eslint-disable no-undef */

/// <reference types="cypress" />

describe("Habit Dashboard", () => {
	beforeEach(() => {
		cy.visit("/habits");
	});
	it("should display modal when add button is pressed", () => {
		cy.contains("button", "Add").click();
		cy.contains("Add a new habit").should("be.visible");
	});
	it("should display habit card when new habit is added", () => {
		cy.get("#habit-add-btn").click();
		cy.get("input[placeholder='Habit']").type("Shid pant: 5:00pm");
		cy.get("button").contains("Save Changes").click();
		cy.contains("Shid pant: 5:00pm")
			.should("be.visible")
			.should("have.class", "HabitCard__habit-container");
	});
	it("should toggle icon when clicked", () => {
		cy.get("#habit-add-btn").click();
		cy.get("input[placeholder='Habit']").type("Shid pant: 5:00pm");
		cy.get("button").contains("Save Changes").click();

		cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible");
		cy.contains("Shid pant: 5:00pm").click();
		cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible");
	});
});
