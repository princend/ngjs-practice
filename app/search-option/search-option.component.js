'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
    module('trend').
    component('searchOption', {
        templateUrl: 'search-option/search-option.component.html',
        bindings: {
            searchItems: '<',
            inputTyping: '&',
            placeholder: '@'
        },
        controller: [
            function PhoneListController() {
                var self = this;
                self.placeholder = ""
                self.search = function () {
                    self.inputTyping({ value: self.searchValue })
                }
            }
        ]
    });