/// <reference types="Cypress" />

// getBy*
cy.getByPlaceholderText('foo');
cy.getBySelectText('foo');
cy.getByText('foo');
cy.getByLabelText('foo');
cy.getByAltText('foo');
cy.getByTestId('foo');

cy.getByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByTitle<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.getByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByDisplayValue<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.getByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByRole<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

// getAllBy*
cy.getAllByPlaceholderText('foo');
cy.getAllBySelectText('foo');
cy.getAllByText('foo');
cy.getAllByLabelText('foo');
cy.getAllByAltText('foo');
cy.getAllByTestId('foo');

cy.getAllByTitle('foo'); // $ExpectType Chainable<HTMLElement[]>
cy.getAllByTitle<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]>

cy.getAllByDisplayValue('foo'); // $ExpectType Chainable<HTMLElement[]>
cy.getAllByDisplayValue<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]>

cy.getAllByRole('foo'); // $ExpectType Chainable<HTMLElement[]>
cy.getAllByRole<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]>

// queryBy*
cy.queryByPlaceholderText('foo');
cy.queryBySelectText('foo');
cy.queryByText('foo');
cy.queryByLabelText('foo');
cy.queryByAltText('foo');
cy.queryByTestId('foo');
cy.queryByTitle('foo');

cy.queryByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByDisplayValue<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByRole<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

// queryAllBy*
cy.queryAllByPlaceholderText('foo');
cy.queryAllBySelectText('foo');
cy.queryAllByText('foo');
cy.queryAllByLabelText('foo');
cy.queryAllByAltText('foo');
cy.queryAllByTestId('foo');

cy.queryAllByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByTitle<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryAllByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByDisplayValue<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryAllByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByRole<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>
