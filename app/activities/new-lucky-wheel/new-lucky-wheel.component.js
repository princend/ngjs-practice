// var NewLuckyWheelController = function NewLuckyWheelController() {
//     var self = this;
//     self.url = location.href;
//     console.log('new-wheell success!!')
// }


activitiesMudule.registerCtrl('NewLuckyWheelController', function ($scope) {
    $scope.url = location.href;
    console.log('new-wheel');
});
