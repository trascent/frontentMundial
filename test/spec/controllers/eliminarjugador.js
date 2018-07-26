'use strict';

describe('Controller: EliminarjugadorCtrl', function () {

  // load the controller's module
  beforeEach(module('practica1frontendApp'));

  var EliminarjugadorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EliminarjugadorCtrl = $controller('EliminarjugadorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EliminarjugadorCtrl.awesomeThings.length).toBe(3);
  });
});
