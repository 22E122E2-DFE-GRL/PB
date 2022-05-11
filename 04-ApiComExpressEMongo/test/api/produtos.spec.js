const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// Serviço
const server = require('../../src/server');

chai.use(chaiHttp);

describe('Produtos Test.', () => {

    it('Deve retornar o produto cadastrado.', () => {
        chai
            .request(server)
            .post('/produtos')
            .send({
                'nome': 'Computador',
                'marca': 'Positivo',
                'preco': 2000.00
            })
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.be.json
                expect(res).to.have.status(201)
                expect(res.body).to.be.not.null
                expect(res.body['acknowledged']).to.be.true
            })
    })

    // it('Deve retornar uma lista vazia de marcas.', () => {
    //     chai
    //         .request(server)
    //         .get('/marcas')
    //         .end((err, res) => {
    //             expect(err).to.be.null
    //             expect(res).to.be.json
    //             expect(res).to.have.status(200)
    //             expect(res.body.length).to.be.eql(0)
    //         })
    // })

    
})