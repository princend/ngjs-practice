'use strict';

angular.
  module('core').
  filter('checkmark', () => {
    return (input) => input ? '\u2713' : '\u2718';
  });
