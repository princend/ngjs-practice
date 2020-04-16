



/** */
// activitiesMudule.registerCtrl('RedEnvelopeManagementController', function ($scope) {
//     $scope.url = location.href;
//     console.log('red-evnelope');
// });

var activitiesMudule = angular.module('activities', []);
(function (activitiesMudule) {
    activitiesMudule.controller('RedEnvelopeManagementController', ['$scope',
        function ($scope) {
            $scope.url = location.href;
        }
    ])
})(activitiesMudule)