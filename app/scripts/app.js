'use strict';

/**
 * @ngdoc overview
 * @name practica1frontendApp
 * @description
 * # practica1frontendApp
 *
 * Main module of the application.
 */
var api_path = 'http://localhost:8080/v1/';
angular
  .module('practica1frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'afOAuth2',
    'treeControl',
    'ngMaterial',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ngStorage',
    'ngWebSocket',
    'angularMoment',
    'ui.utils.masks',
    'pascalprecht.translate'
  ])
    .run(function(amMoment) {
      amMoment.changeLocale('es');
    })
    .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/notificaciones', {
        templateUrl: 'views/notificaciones.html',
        controller: 'NotificacionesCtrl',
        controllerAs: 'notificaciones'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/selecciones', {
        templateUrl: 'views/selecciones.html',
        controller: 'SeleccionesCtrl',
        controllerAs: 'selecciones'
      })
      .when('/jugadores', {
        templateUrl: 'views/jugadores.html',
        controller: 'JugadoresCtrl',
        controllerAs: 'jugadores'
      })
      .when('/eliminarseleccion/:Id', {
        templateUrl: 'views/eliminarseleccion.html',
        controller: 'EliminarseleccionCtrl',
        controllerAs: 'eliminarseleccion'
      })
      .when('/eliminarseleccion', {
        templateUrl: 'views/eliminarseleccion.html',
        controller: 'EliminarseleccionCtrl',
        controllerAs: 'eliminarseleccion'
      })
      .when('/eliminarjugador/:Id', {
        templateUrl: 'views/eliminarjugador.html',
        controller: 'EliminarjugadorCtrl',
        controllerAs: 'eliminarjugador'
      })
      .when('/eliminarjugador', {
        templateUrl: 'views/eliminarjugador.html',
        controller: 'EliminarjugadorCtrl',
        controllerAs: 'eliminarjugador'
      })
      .when('/editarjugador/:Id', {
        templateUrl: 'views/editarjugador.html',
        controller: 'EditarjugadorCtrl',
        controllerAs: 'editarjugador'
      })
      .when('/editarjugador', {
        templateUrl: 'views/editarjugador.html',
        controller: 'EditarjugadorCtrl',
        controllerAs: 'editarjugador'
      })
      .when('/agregarseleccion', {
        templateUrl: 'views/agregarseleccion.html',
        controller: 'AgregarseleccionCtrl',
        controllerAs: 'agregarseleccion'
      })
      .when('/agregarjugador', {
        templateUrl: 'views/agregarjugador.html',
        controller: 'AgregarjugadorCtrl',
        controllerAs: 'agregarjugador'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
