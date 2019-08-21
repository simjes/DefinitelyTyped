/// <reference types="Cypress" />

// getBy*
cy.getByPlaceholderText('foo');
cy.getBySelectText('foo');
cy.getByText('foo');
cy.getByLabelText('foo');
cy.getByAltText('foo');
cy.getByTestId('foo');
cy.getByTitle('foo');
cy.getByDisplayValue('foo');
cy.getByRole('foo');

// getAllBy*
cy.getAllByPlaceholderText('foo');
cy.getAllBySelectText('foo');
cy.getAllByText('foo');
cy.getAllByLabelText('foo');
cy.getAllByAltText('foo');
cy.getAllByTestId('foo');
cy.getAllByTitle('foo');
cy.getAllByDisplayValue('foo');
cy.getAllByRole('foo');

// queryBy*
cy.queryByPlaceholderText('foo');
cy.queryBySelectText('foo');
cy.queryByText('foo');
cy.queryByLabelText('foo');
cy.queryByAltText('foo');
cy.queryByTestId('foo');
cy.queryByTitle('foo');
cy.queryByDisplayValue('foo');
cy.queryByRole('foo');

// queryAllBy*
cy.queryAllByPlaceholderText('foo');
cy.queryAllBySelectText('foo');
cy.queryAllByText('foo');
cy.queryAllByLabelText('foo');
cy.queryAllByAltText('foo');
cy.queryAllByTestId('foo');
cy.queryAllByTitle('foo');
cy.queryAllByDisplayValue('foo');
cy.queryAllByRole('foo');
