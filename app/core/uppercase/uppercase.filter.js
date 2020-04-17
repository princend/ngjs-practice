'use strict';

angular.
    module('core').
    filter('uppercase', () => {
        return (input) => input ? input+='1111' : '';
    });
