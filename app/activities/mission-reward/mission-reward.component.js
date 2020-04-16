// var MissionRewardController = function MissionRewardController() {
//     var self = this;
//     self.url = location.href;
//     console.log('mission-reward success!!')
// }

// activitiesMudule.registerCtrl('MissionRewardController', function ($scope) {
//     $scope.url = location.href;
//     console.log('mission-reward');
// });

var activitiesMudule = angular.module('activities', []);
(function (activitiesMudule) {
    activitiesMudule.controller('MissionRewardController', ['$scope',
        function ($scope) {
            $scope.url = location.href;
        }
    ])
})(activitiesMudule)