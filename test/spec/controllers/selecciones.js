'use strict';

describe('Controller: SeleccionesCtrl', function () {

  // load the controller's module
  beforeEach(module('practica1frontendApp'));

  var SeleccionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeleccionesCtrl = $controller('SeleccionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SeleccionesCtrl.awesomeThings.length).toBe(3);
  });
});
