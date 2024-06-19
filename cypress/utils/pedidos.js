export function criarPedido(bookId, customerName) {
    const baseUrl = Cypress.env('BASE_URL');
    return cy.request({
        method: 'POST',
        url: `${baseUrl}/orders`,
        headers: {
            Authorization: `Bearer ${Cypress.env('AUTH_TOKEN')}`
        },
        body: {
            bookId,
            customerName,
        },
        failOnStatusCode: false
    });
}

export function atualizarPedido(orderId, customerName) {
    const baseUrl = Cypress.env('BASE_URL');
    return cy.request({
        method: 'PATCH',
        url: `${baseUrl}/orders/${orderId}`,
        headers: {
            Authorization: `Bearer ${Cypress.env('AUTH_TOKEN')}`
        },
        body: {
            customerName
        },
        failOnStatusCode: false
    });
}

export function excluirPedido(orderId) {
    const baseUrl = Cypress.env('BASE_URL');
    return cy.request({
        method: 'DELETE',
        url: `${baseUrl}/orders/${orderId}`,
        headers: {
            Authorization: `Bearer ${Cypress.env('AUTH_TOKEN')}`
        },
        failOnStatusCode: false
    });
}

export function obterPedido(orderId) {
    const baseUrl = Cypress.env('BASE_URL');
    return cy.request({
        method: 'GET',
        url: `${baseUrl}/orders/${orderId}`,
        headers: {
            Authorization: `Bearer ${Cypress.env('AUTH_TOKEN')}`
        },
        failOnStatusCode: false
    });
}

export function listarPedidos() {
    const baseUrl = Cypress.env('BASE_URL');
    return cy.request({
        method: 'GET',
        url: `${baseUrl}/orders`,
        headers: {
            Authorization: `Bearer ${Cypress.env('AUTH_TOKEN')}`
        }
    });
}
