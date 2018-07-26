'use strict';

describe('Controller: EditarjugadorCtrl', function () {

  // load the controller's module
  beforeEach(module('practica1frontendApp'));

  var EditarjugadorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarjugadorCtrl = $controller('EditarjugadorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarjugadorCtrl.awesomeThings.length).toBe(3);
  });
});
