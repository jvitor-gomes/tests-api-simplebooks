import { listarLivros } from '../../../utils/livros';

describe('Listar livros - API Tests', () => {
    it('Listar todos os livros', () => {
        listarLivros().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        });
    });

    it('Listar livros com parâmetros de consulta', () => {
        listarLivros({ type: 'fiction', limit: 4 }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array').and.have.length(4);
        });
        listarLivros({ type: 'non-fiction', limit: 2 }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array').and.have.length(2);
        });
    });

    it('Tentar listar mais livros do que o limite permitido', () => {
        listarLivros({ limit: 21 }).then((response) => {
            expect(response.status).to.be.eq(400);
        });
    });
});