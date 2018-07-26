'use strict';

describe('Controller: AgregarjugadorCtrl', function () {

  // load the controller's module
  beforeEach(module('practica1frontendApp'));

  var AgregarjugadorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgregarjugadorCtrl = $controller('AgregarjugadorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgregarjugadorCtrl.awesomeThings.length).toBe(3);
  });
});
