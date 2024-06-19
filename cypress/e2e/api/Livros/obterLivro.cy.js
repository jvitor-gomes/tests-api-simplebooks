import { obterLivro } from '../../../utils/livros';

describe('Obter livro - API Tests', () => {
    it('Obter um livro específico', () => {
        obterLivro(1).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', 1);
        });
    });

    it('Tentar obter um livro com ID inválido', () => {
        obterLivro('invalid_id').then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
