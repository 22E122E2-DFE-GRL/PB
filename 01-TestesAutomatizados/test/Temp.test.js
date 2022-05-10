var expect = require('chai').expect
var TempUtil = require('../src/TempUtil')

describe('Conversão de Temperatura', () => {
    let tempUtil; // = new TempUtil(); 

    beforeEach(() => { 
        tempUtil = new TempUtil(); 
    })

    afterEach(() => {
        
    })

    it('Deve retornar 0°C para 32°F.', () => {
        // Arrumação
        // const tempUtil = new TempUtil();
        const fahrenheit = 32;

        // Ação
        const celsius = tempUtil.f2c(fahrenheit);

        // Averiguação
        expect(0).to.eq(celsius);
    })

    it('Deve retornar 100°C para 212°F.', () => {
        // Arrumação
        // const tempUtil = new TempUtil();
        const fahrenheit = 212;

        // Ação
        const celsius = tempUtil.f2c(fahrenheit);

        // Averiguação
        expect(100).to.eq(celsius);
    })

    it('Deve retornar 32°F para 0°C.', () => {
        // Arrumação
        // const tempUtil = new TempUtil();
        const fahrenheit = 212;

        // Ação
        const celsius = tempUtil.f2c(fahrenheit);

        // Averiguação
        expect(100).to.eq(celsius);
    })

})