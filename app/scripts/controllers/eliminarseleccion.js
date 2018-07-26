'use strict';

/**
 * @ngdoc function
 * @name practica1frontendApp.controller:EliminarseleccionCtrl
 * @description
 * # EliminarseleccionCtrl
 * Controller of the practica1frontendApp
 */
angular.module('practica1frontendApp')
  .controller('EliminarseleccionCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.Id = $routeParams.Id;
    $scope.title = 'Selecciones';
    $scope.message = 'Eliminar Selección';
    $scope.load = function(Id){
      $http.get(api_path + 'seleccion/'+Id)
      .then(function(response) {
          $scope.selec = response.data;
      });
    };
    $scope.delete = function(Id){
      $http.delete(api_path+'seleccion/'+Id)
      .then(function() {
          window.location.href = '#/selecciones';
      });
    };

    $scope.cancel = function(){
      window.location.href = '#/selecciones';
    };
  }]);
