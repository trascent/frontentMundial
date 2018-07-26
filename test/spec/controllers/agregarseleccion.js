'use strict';

describe('Controller: AgregarseleccionCtrl', function () {

  // load the controller's module
  beforeEach(module('practica1frontendApp'));

  var AgregarseleccionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgregarseleccionCtrl = $controller('AgregarseleccionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgregarseleccionCtrl.awesomeThings.length).toBe(3);
  });
});
