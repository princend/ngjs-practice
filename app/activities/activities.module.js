
var activitiesMudule = angular.module('activities', ['ngRoute']);



/**元件 */
const components = [
    {
        name: 'activities', config: {
            templateUrl: 'activities/activities.component.html',
            controller: ActivitiesController,
            controllerAs: 'self'
        }
    }
]

components.forEach(component => {
    activitiesMudule.component(component.name, component.config);
})


/** router 設定 */
activitiesMudule.
    config(['$routeProvider', '$controllerProvider',
        function config($routeProvider, $controllerProvider) {
            activitiesMudule.registerCtrl = $controllerProvider.register;

            function loadScript(path) {
                var result = $.Deferred(),
                    script = document.createElement("script");
                script.async = "async";
                script.type = "text/javascript";
                script.src = path;
                script.onload = script.onreadystatechange = function (_, isAbort) {
                    if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                        if (isAbort)
                            result.reject();
                        else
                            result.resolve();
                    }
                };
                script.onerror = function () { result.reject(); };
                document.querySelector("head").appendChild(script);
                return result.promise();
            }


            function loader(arrayName) {
                return {
                    load: function ($q) {
                        var deferred = $q.defer(),
                            map = arrayName.map(function (name) {
                                return loadScript('/activities/' + name + ".js");
                            });

                        $q.all(map).then(function (r) {
                            deferred.resolve();
                        });

                        return deferred.promise;
                    }
                };
            }

            $routeProvider
                .when('/activities/CheckinEvent', {
                    templateUrl: '/activities/checkin-event/checkin-event.component.html',
                    controller: 'CheckinEventController',
                    resolve: loader(['checkin-event/checkin-event.component'])
                })
                .when('/activities/DiscountWallet', {
                    templateUrl: '/activities/discount-wallet/discount-wallet.component.html',
                    controller: 'DiscountWalletController',
                    resolve: loader(['discount-wallet/discount-wallet.component'])
                })
                .when('/activities/LuckyWheelManagement', {
                    templateUrl: '/activities/lucky-wheel-management/lucky-wheel-management.component.html',
                    controller: 'LuckyWheelManagementController',
                    resolve: loader(['lucky-wheel-management/lucky-wheel-management.component'])
                })
                .when('/activities/MissionReward', {
                    templateUrl: '/activities/mission-reward/mission-reward.component.html',
                    controller: 'MissionRewardController',
                    resolve: loader(['mission-reward/mission-reward.component'])
                })
                .when('/activities/NewLuckyWheel', {
                    templateUrl: '/activities/new-lucky-wheel/new-lucky-wheel.component.html',
                    controller: 'NewLuckyWheelController',
                    resolve: loader(['new-lucky-wheel/new-lucky-wheel.component'])
                })
                .when('/activities/RedEnvelopeManagement', {
                    templateUrl: '/activities/red-envelope-management/red-envelope-management.component.html',
                    controller: 'RedEnvelopeManagementController',
                    resolve: loader(['red-envelope-management/red-envelope-management.component'])
                })
                .otherwise('/activities');
        }
    ]);


