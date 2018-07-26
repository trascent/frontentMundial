'use strict';

/**
 * @ngdoc function
 * @name practica1frontendApp.controller:EditarjugadorCtrl
 * @description
 * # EditarjugadorCtrl
 * Controller of the practica1frontendApp
 */
 angular.module('practica1frontendApp')
 .controller('EditarjugadorCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
   $scope.Id = $routeParams.Id;
   $scope.title = 'Jugadores';
   $scope.message = 'Editar Datos de Jugador';
   $scope.load = function(Id){
   $http.get(api_path + 'jugador/'+Id)
   .then(function(response) {
       $scope.player = response.data;
   });
 };
   $scope.edit = function(Id){
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
   var data = {
       Id: parseInt(Id),
       Nombre: $scope.player.Nombre,
       Club: $scope.player.Club,
       Edad: parseInt($scope.player.Edad),
       Posicion: $scope.player.Posicion,
   };
   console.log(Id);
   $http.put(api_path + 'jugador/'+Id,data)
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
   window.location.href = '#/jugadores';
   //$location.url('/#/predicados');
 };

   $scope.cancel = function(){
   window.location.href = '#/jugadores';
 };
}]);
