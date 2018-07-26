'use strict';

/**
 * @ngdoc function
 * @name practica1frontendApp.controller:NotificacionesCtrl
 * @description
 * # NotificacionesCtrl
 * Controller of the practica1frontendApp
 */
angular.module('practica1frontendApp')
  .controller('NotificacionesCtrl', function($scope, notificacion) {
    $scope.imagePath = 'images/yeoman.png';
    $scope.notificacion = notificacion;
  });
