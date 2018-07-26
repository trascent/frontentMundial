'use strict';

/**
 * @ngdoc function
 * @name practica1frontendApp.controller:AgregarseleccionCtrl
 * @description
 * # AgregarseleccionCtrl
 * Controller of the practica1frontendApp
 */
angular.module('practica1frontendApp')
  .controller('AgregarseleccionCtrl', function ($scope,$http) {
  $scope.title = 'Selecciones';
  $scope.message = 'Agregar Selección';
  $scope.add = function(){
  if($scope.selec.Nombre === null){
    return;
  }
  if($scope.selec.Tecnico === null){
    return;
  }
  if($scope.selec.Federacion === null){
    return;
  }
  if($scope.selec.Pais === null){
    return;
  }
  var data = {
      Nombre: $scope.selec.Nombre,
      Tecnico: $scope.selec.Tecnico,
      Federacion: $scope.selec.Federacion,
      Pais: $scope.selec.Pais,
  };
  $http.post(api_path + 'seleccion',data)
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error);
  });
    window.location.href = '#/selecciones';
  };
  $scope.cancel = function(){
    window.location.href = '#/selecciones';
  };
  });
