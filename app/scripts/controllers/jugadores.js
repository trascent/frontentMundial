'use strict';

/**
 * @ngdoc function
 * @name practica1frontendApp.controller:JugadoresCtrl
 * @description
 * # JugadoresCtrl
 * Controller of the practica1frontendApp
 */
angular.module('practica1frontendApp')
  .controller('JugadoresCtrl', function ($scope,$http) {
    $scope.title = 'Jugadores';
    $scope.message = 'Listado de Jugadores';
    $http.get(api_path+'jugador?limit=0&sortby=Id&order=asc')
    .then(function(response) {
        $scope.data = response.data;
      });
  });
