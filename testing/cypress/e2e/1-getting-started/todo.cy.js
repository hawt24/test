/// <reference types="cypress" />

describe('Task List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should add a task', () => {
    const taskName = 'New Task';
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns(taskName);
    });

    cy.get('button').contains('Add Task').click();
    cy.contains('li', taskName).should('exist');
  });

  it('should complete a task', () => {
    const taskName = 'Task to Complete';
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns(taskName);
    });

    cy.get('button').contains('Add Task').click();
    cy.contains('li', taskName).should('exist');

    cy.contains('li', taskName).find('button').contains('Complete').click();
    cy.contains('li', taskName).should('have.class', 'completed');
  });

  it('should delete a task', () => {
    const taskName = 'Task to Delete';
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns(taskName);
    });

    cy.get('button').contains('Add Task').click();
    cy.contains('li', taskName).should('exist');

    cy.contains('li', taskName).find('button').contains('Delete').click();
    cy.contains('li', taskName).should('not.exist');
  });
});


