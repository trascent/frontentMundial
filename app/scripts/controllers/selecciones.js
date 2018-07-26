'use strict';

/**
 * @ngdoc function
 * @name practica1frontendApp.controller:SeleccionesCtrl
 * @description
 * # SeleccionesCtrl
 * Controller of the practica1frontendApp
 */
angular.module('practica1frontendApp')
  .controller('SeleccionesCtrl', function ($scope,$http) {
    $scope.title = 'Selecciones';
    $scope.message = 'Listado de Selecciones';
    $http.get(api_path+'seleccion?limit=0')
    .then(function(response) {
        $scope.data = response.data;
});
  });
