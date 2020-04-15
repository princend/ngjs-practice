'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', '$http',
      function PhoneListController(Phone, $http) {
        $http.get('phones/phones.json').then(function (response) {
          console.log(response, 'ccc~')
          self.phones = response.data;
        });
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });



// $http ver
// angular.
//   module('phoneList').
//   component('phoneList', {
//     templateUrl: 'phone-list/phone-list.template.html',
//     controller: function PhoneListController($http) {
//       var self = this;
//       self.orderProp = 'age';
//       $http.get('phones/phones.json').then(function (response) {
//         console.log(response, 'ccc~')
//         self.phones = response.data;
//       });
//     }
//   });


