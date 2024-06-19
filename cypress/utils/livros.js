export function listarLivros(queryParams = {}) {
    const baseUrl = Cypress.env('BASE_URL');
    return cy.request({
        method: 'GET',
        url: `${baseUrl}/books`,
        qs: queryParams,
        headers: {
            Authorization: `Bearer ${Cypress.env('AUTH_TOKEN')}`
        },
        failOnStatusCode: false
    });
}

export function obterLivro(bookId) {
    const baseUrl = Cypress.env('BASE_URL');
    return cy.request({
        method: 'GET',
        url: `${baseUrl}/books/${bookId}`,
        headers: {
            Authorization: `Bearer ${Cypress.env('AUTH_TOKEN')}`
        },
        failOnStatusCode: false
    });
}