// var DiscountWalletController = function DiscountWalletController() {
//     var self = this;
//     self.url = location.href;
//     console.log('discount success!!')
// }


activitiesMudule.registerCtrl('DiscountWalletController', function ($scope) {
    $scope.url = location.href;
    console.log('discount-wallet');
});
