import { criarPedido } from '../../../utils/pedidos';
describe('Criar pedido - API Tests', () => {
    before(() => {
        cy.cliente();
    });

    it('Criar um novo pedido', () => {
        criarPedido(1, 'Andy Sam').then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('orderId');
        });
    });

    it('Tentar criar um pedido com um ID Inválido', () => {
        criarPedido('invalid_id', 'Stephanie Beatriz').then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Invalid or missing bookId.');
        });
    });

    it('Tentar criar um pedido de um livro não disponível', () => {
        criarPedido(2, 'Joe Lo Truglio').then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.have.property('error', 'This book is not in stock. Try again later.');
        });
    });
});
