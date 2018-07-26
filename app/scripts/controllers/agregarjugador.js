'use strict';

/**
 * @ngdoc function
 * @name practica1frontendApp.controller:AgregarjugadorCtrl
 * @description
 * # AgregarjugadorCtrl
 * Controller of the practica1frontendApp
 */
angular.module('practica1frontendApp')
  .controller('AgregarjugadorCtrl', function ($scope,$http) {
    $scope.title = 'Jugadores';
    $scope.message = 'Agregar Jugador';
    $http.get(api_path + 'seleccion?limit=0&sortby=Id&order=asc')
  .then(function(response) {
      $scope.dataseleciones = response.data;
  });
    $scope.add = function(){
    if($scope.player.Nombre === null){
      return;
    }
    if($scope.player.Club === null){
      return;
    }
    if($scope.player.Edad === null){
      return;
    }
    if($scope.player.Posicion === null){
      return;
    }
    if($scope.player.IdSeleccion === null){
      return;
    }
    var data = {
        Nombre: $scope.player.Nombre,
        Club: $scope.player.Club,
        Edad: parseInt($scope.player.Edad),
        Posicion: $scope.player.Posicion,
        IdSeleccion: {Id: parseInt($scope.player.IdSeleccion)},
    };
    $http.post(api_path + 'jugador',data)
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
      window.location.href = '#/jugadores';
    };
    $scope.cancel = function(){
      window.location.href = '#/jugadores';
    };
  });
