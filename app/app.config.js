'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/trend', {
          template: '<trend></trend>'
        }).
        when('/home', {
          template: '<home></home>'
        }).
        when('/activities', {
          template: '<activities></activities>'
        }).
        otherwise('/home');
    }
  ]);
