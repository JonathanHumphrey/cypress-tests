/* eslint-disable no-undef */

/// <reference types="cypress" />

describe("Locators", () => {
	beforeEach(() => {
		cy.visit("/elements");
	});

	// Each it is one test
	it("locating the elements with get", () => {
		// Gets all elements by HTML tag name
		cy.get("button");
		cy.get("h3");

		// Get elements by class name
		cy.get(".btn-with-class");

		// Get elements with multiple classes, with exact matching
		cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

		cy.get("[class='Elements-btn btn-with-class']");

		// Get elements by id
		cy.get("[id='btn-with-id']"); // using attribute
		cy.get("#btn-with-id"); // using # id notation

		// Get all elements by type
		cy.get("[type='submit']");

		// Get all elements by tag name AND class
		cy.get("button.Elements-btn");

		// Get all elements by tag name AND class AND id
		cy.get("button.Elements-btn#btn-with-id");

		// Get all elements by tag name AND class name AND type
		cy.get("button.Elements-btn[type='submit']");

		// Making resilient tests requires some unique identifiers
		// get all elements with specific cypress id
		cy.get("[data-cy='btn-id-1']");

		// same as above, but uses the command defined in commands.js
		cy.getByTestId("btn-id-1");
	});
	it("locating elements with contains", () => {
		// Get element by unique text
		cy.contains("Unique Text");
		// Get element by Not Unique text,
		cy.contains("Not Unique Text");

		// however: contains only gets one element, unless a selector is identified
		cy.contains("[type='submit']", "Not Unique Text");
		cy.contains("form", "Not Unique Text");

		// Combining get, then adding contains to narrow downt he query
		cy.get("[type='submit']").contains("Not Unique Text");
	});
	it("locating elements with find", () => {
		cy.get("#form-1").find(".btn-1");
		cy.get("#form-1").find(".btn-2");
	});
});
