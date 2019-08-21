/// <reference types="Cypress" />

// getBy*
cy.getByPlaceholderText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByPlaceholderText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.getBySelectText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getBySelectText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.getByText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.getByLabelText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByLabelText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.getByAltText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByAltText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.getByTestId('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByTestId<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.getByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByTitle<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.getByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByDisplayValue<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.getByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByRole<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

// getAllBy*
cy.getAllByPlaceholderText('foo'); // $ExpectType Chainable<HTMLElement[]> //feil typings?
cy.getAllByPlaceholderText<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]> //feil typings?

cy.getAllBySelectText('foo'); // $ExpectType Chainable<HTMLElement[]>
cy.getAllBySelectText<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]>

cy.getAllByText('foo'); // $ExpectType Chainable<HTMLElement[]>
cy.getAllByText<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]>

cy.getAllByLabelText('foo'); // $ExpectType Chainable<HTMLElement[]>
cy.getAllByLabelText<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]>

cy.getAllByAltText('foo'); // $ExpectType Chainable<HTMLElement[]>
cy.getAllByAltText<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]>

cy.getAllByTestId('foo'); // $ExpectType Chainable<HTMLElement[]>
cy.getAllByTestId<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]>

cy.getAllByTitle('foo'); // $ExpectType Chainable<HTMLElement[]>
cy.getAllByTitle<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]>

cy.getAllByDisplayValue('foo'); // $ExpectType Chainable<HTMLElement[]>
cy.getAllByDisplayValue<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]>

cy.getAllByRole('foo'); // $ExpectType Chainable<HTMLElement[]>
cy.getAllByRole<'div'>('foo'); // $ExpectType Chainable<HTMLDivElement[]>

// queryBy*
cy.queryByPlaceholderText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByPlaceholderText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryBySelectText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryBySelectText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryByText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryByLabelText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByLabelText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryByAltText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByAltText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryByTestId('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByTestId<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByTitle<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByDisplayValue<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByRole<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

// queryAllBy*
cy.queryAllByPlaceholderText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByPlaceholderText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryAllBySelectText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllBySelectText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryAllByText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryAllByLabelText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByLabelText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryAllByAltText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByAltText<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryAllByTestId('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByTestId<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryAllByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByTitle<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryAllByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByDisplayValue<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>

cy.queryAllByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByRole<'div'>('foo'); // $ExpectType Chainable<JQuery<HTMLDivElement>>
