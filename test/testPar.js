// Ejemplo de test utilizando la librería should

// Cargar la librería should
var should = require('should');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función esPar', function() {
  operaciones.esPar.should.be.a.Function();
  should.equal(operaciones.esPar(7), false);
  should.equal(operaciones.esPar(12), true);
  should.equal(operaciones.esPar(0), true);
  should.equal(operaciones.esPar(-17), false);
  should.equal(operaciones.esPar(-6), true);
});



