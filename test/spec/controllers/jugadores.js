'use strict';

describe('Controller: JugadoresCtrl', function () {

  // load the controller's module
  beforeEach(module('practica1frontendApp'));

  var JugadoresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JugadoresCtrl = $controller('JugadoresCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JugadoresCtrl.awesomeThings.length).toBe(3);
  });
});
