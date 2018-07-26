'use strict';

/**
 * @ngdoc function
 * @name practica1frontendApp.controller:EliminarjugadorCtrl
 * @description
 * # EliminarjugadorCtrl
 * Controller of the practica1frontendApp
 */
 angular.module('practica1frontendApp')
  .controller('EliminarjugadorCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
     $scope.Id = $routeParams.Id;
     $scope.title = 'Jugadores';
     $scope.message = 'Eliminar Jugador';
     $scope.load = function(Id){
       $http.get(api_path + 'jugador/'+Id)
       .then(function(response) {
           $scope.domain = response.data;
       });
     };
     $scope.delete = function(Id){
       $http.delete(api_path+'jugador/'+Id)
       .then(function() {
           window.location.href = '#/jugadores';
       });
     };

     $scope.cancel = function(){
       window.location.href = '#/jugadores';
     };
   }]);
