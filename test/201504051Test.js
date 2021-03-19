const assert = require('chai').assert;
const expect = require('chai').expect;
const carne = require('../201504051');


describe('201504051', function(){
    describe('ordenamientoBurbuja()', function(){
        it('deberia de retornar un arreglo ordenado', function(){
            let result = carne.ordenamientoBurbuja([5,9,1,12,4,74])
            expect([1,4,5,9,12,74]).to.eql(result);
        });
    });

    describe('square()', function(){
        it('deber retornar el numero multiplicado por si mismo', function(){
            let result = carne.square(7)
            assert.equal(result, 49);
        });
    });

    describe('SNK()', function(){
        it('deber retornar un rotulo con el mensaje enviado', function(){
            let result = carne.SNK("prueba");
            assert.equal(result, '$$ MENSAJE: prueba $$');
        });
    });

    describe('devolverValorAscii()', function(){
        it('deber retornar el valor numérico del caracter enviar', function(){
            let result = carne.devolverValorAscii('R')
            assert.equal(result, 82);
        });
    });

    describe('doPow()', function(){
        it('deber retornar el resultado de elevar el primer numero por el segundo', function(){
            let result = carne.doPow(5,2)
            assert.equal(result, 25);
        });
    });
});