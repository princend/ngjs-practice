// var CheckinEventController = function CheckinEventController() {
//     var self = this;
//     self.url = location.href;
//     console.log('checkin success!!')
// }

activitiesMudule.registerCtrl('CheckinEventController', function ($scope) {
    $scope.url = location.href;
    console.log('check-in');
});