const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// Serviço
const server = require('../../src/server');

chai.use(chaiHttp);

describe('Marcas Test.', () => {
    it('Deve retornar uma lista vazia de marcas.', () => {
        chai
            .request(server)
            .get('/marcas')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.be.json
                expect(res).to.have.status(200)
                expect(res.body.length).to.be.eql(0)
            })
    })

    it('Deve retornar uma mensagem de cadastro de marca.', () => {
        chai
            .request(server)
            .post('/marcas')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.be.json
                expect(res).to.have.status(201)
                expect(res.body).to.be
                    .eql("Marca cadastrada com sucesso.")

                chai
                    .request(server)
                    .get('/marcas')
                    .end((err, res) => {
                        expect(err).to.be.null
                        expect(res).to.be.json
                        expect(res).to.have.status(200)
                        expect(res.body.length).to.be.not.equal(0)
                    })
            })

    })
})