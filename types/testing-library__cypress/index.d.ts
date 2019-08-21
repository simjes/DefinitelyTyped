// Type definitions for @testing-library/cypress 4.1
// Project: https://github.com/testing-library/cypress-testing-library
// Definitions by: Aaron Mc Adam <https://github.com/aaronmcadam>
//                 Basti Buck <https://github.com/ppi-buck>
//                 Stefano Magni <https://github.com/NoriSte>
//                 Justin Hall <https://github.com/wKovacs64>
//                 Brian Ng <https://github.com/existentialism>
//                 Airat Aminev <https://github.com/airato>
//                 Simon Jespersen <https://github.com/simjes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
    Matcher,
    MatcherOptions as DTLMatcherOptions,
    SelectorMatcherOptions as DTLSelectorMatcherOptions,
} from '@testing-library/dom';

export interface CTLMatcherOptions {
    timeout?: number;
}

export type MatcherOptions = DTLMatcherOptions | CTLMatcherOptions;
export type SelectorMatcherOptions = DTLSelectorMatcherOptions | CTLMatcherOptions;

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByPlaceholderText(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryByPlaceholderText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByPlaceholderText(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryAllByPlaceholderText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByPlaceholderText(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            getByPlaceholderText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            // TODO: Check typings
            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByPlaceholderText(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            getAllByPlaceholderText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryBySelectText(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryBySelectText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllBySelectText(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryAllBySelectText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getBySelectText(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            getBySelectText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllBySelectText(id: Matcher, options?: MatcherOptions): Chainable<HTMLElement[]>;
            getAllBySelectText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryByText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryAllByText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery<HTMLElement>>;
            getByText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByText(id: Matcher, options?: SelectorMatcherOptions): Chainable<HTMLElement[]>;
            getAllByText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByLabelText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryByLabelText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByLabelText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryAllByLabelText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByLabelText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery<HTMLElement>>;
            getByLabelText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByLabelText(id: Matcher, options?: SelectorMatcherOptions): Chainable<HTMLElement[]>;
            getAllByLabelText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByAltText(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryByAltText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByAltText(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryAllByAltText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByAltText(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            getByAltText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByAltText(id: Matcher, options?: MatcherOptions): Chainable<HTMLElement[]>;
            getAllByAltText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByTestId(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByTestId(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryAllByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByTestId(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            getByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByTestId(id: Matcher, options?: MatcherOptions): Chainable<HTMLElement[]>;
            getAllByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByTitle(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByTitle(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryAllByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByTitle(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            getByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByTitle(id: Matcher, options?: MatcherOptions): Chainable<HTMLElement[]>;
            getAllByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByDisplayValue(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryByDisplayValue<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByDisplayValue(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryAllByDisplayValue<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByDisplayValue(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            getByDisplayValue<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByDisplayValue(id: Matcher, options?: MatcherOptions): Chainable<HTMLElement[]>;
            getAllByDisplayValue<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByRole(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByRole(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            queryAllByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByRole(id: Matcher, options?: MatcherOptions): Chainable<JQuery<HTMLElement>>;
            getByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByRole(id: Matcher, options?: MatcherOptions): Chainable<HTMLElement[]>;
            getAllByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;
        }
    }
}
