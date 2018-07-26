'use strict';

describe('Controller: EliminarseleccionCtrl', function () {

  // load the controller's module
  beforeEach(module('practica1frontendApp'));

  var EliminarseleccionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EliminarseleccionCtrl = $controller('EliminarseleccionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EliminarseleccionCtrl.awesomeThings.length).toBe(3);
  });
});
