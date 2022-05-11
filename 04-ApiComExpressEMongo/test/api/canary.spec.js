// Testes de API
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// Serviço
const server = require('../../src/server');

chai.use(chaiHttp);

describe('Canary Test.', () => {
    it('Deve retornar a mensagem OK', () => {
        chai
            .request(server)    // instancia o serviço
            .get('/')           // request
            .end((err, res) => {        // then -> quando a api retornar
                // Verificações
                expect(err).to.be.null          // o err é null
                expect(res).to.be.json          // a resposta me entregou um json
                expect(res).to.have.status(200) // a resposta tenha o atributo status == 200
                expect(res.body).to.be.eql("OK")
            })
    })
})
