// var LuckyWheelManagementController = function LuckyWheelManagementController() {
//     var self = this;
//     self.url = location.href;
//     console.log('lucky-wheel success!!')
// }

activitiesMudule.registerCtrl('LuckyWheelManagementController', function ($scope) {
    $scope.url = location.href;
    console.log('lucky-wheel');
});
