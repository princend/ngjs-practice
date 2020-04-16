
var activitiesMudule = angular.module('activities', ['ngRoute', 'oc.lazyLoad']);



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



/** router設定 使用套件 */

activitiesMudule.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        'debug': false,
        'events': true,
        'modules': [
            {
                name: 'redEnvelopeManagement',
                files: ['/activities/red-envelope-management/red-envelope-management.component.js']
            },
            {
                name: 'checkinEvent',
                files: ['/activities/checkin-event/checkin-event.component.js']
            },
            {
                name: 'discountWallet',
                files: ['/activities/discount-wallet/discount-wallet.component.js']
            },
            {
                name: 'luckyWheelManagement',
                files: ['/activities/lucky-wheel-management/lucky-wheel-management.component.js']
            },
            {
                name: 'missionReward',
                files: ['/activities/mission-reward/mission-reward.component.js']
            },
            {
                name: 'newLuckyWheel',
                files: ['/activities/new-lucky-wheel/new-lucky-wheel.component.js']
            }
        ]
    });
}]);


activitiesMudule.config(function ($routeProvider) {
    $routeProvider
        .when('/activities/RedEnvelopeManagement', {
            templateUrl: '/activities/red-envelope-management/red-envelope-management.component.html',
            controller: 'RedEnvelopeManagementController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('redEnvelopeManagement'); // Resolve promise and load before view 
                }]
            }
        })

        .when('/activities/CheckinEvent', {
            templateUrl: '/activities/checkin-event/checkin-event.component.html',
            controller: 'CheckinEventController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('checkinEvent'); // Resolve promise and load before view 
                }]
            }
        })
        .when('/activities/DiscountWallet', {
            templateUrl: '/activities/discount-wallet/discount-wallet.component.html',
            controller: 'DiscountWalletController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('discountWallet'); // Resolve promise and load before view 
                }]
            }
        })
        .when('/activities/LuckyWheelManagement', {
            templateUrl: '/activities/lucky-wheel-management/lucky-wheel-management.component.html',
            controller: 'LuckyWheelManagementController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('luckyWheelManagement'); // Resolve promise and load before view 
                }]
            }
        })
        .when('/activities/MissionReward', {
            templateUrl: '/activities/mission-reward/mission-reward.component.html',
            controller: 'MissionRewardController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('missionReward'); // Resolve promise and load before view 
                }]
            }
        })
        .when('/activities/NewLuckyWheel', {
            templateUrl: '/activities/new-lucky-wheel/new-lucky-wheel.component.html',
            controller: 'NewLuckyWheelController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('newLuckyWheel'); // Resolve promise and load before view 
                }]
            }
        })
    $routeProvider.otherwise('/activities');
});


/** router 設定  不使用套件*/
// activitiesMudule.
//     config(['$routeProvider', '$controllerProvider',
//         function config($routeProvider, $controllerProvider) {
//             activitiesMudule.registerCtrl = $controllerProvider.register;

//             function loadScript(path) {
//                 var result = $.Deferred(),
//                     script = document.createElement("script");
//                 script.async = "async";
//                 script.type = "text/javascript";
//                 script.src = path;
//                 script.onload = script.onreadystatechange = function (_, isAbort) {
//                     if (!script.readyState || /loaded|complete/.test(script.readyState)) {
//                         if (isAbort)
//                             result.reject();
//                         else
//                             result.resolve();
//                     }
//                 };
//                 script.onerror = function () { result.reject(); };
//                 document.querySelector("head").appendChild(script);
//                 return result.promise();
//             }


//             function loader(arrayName) {
//                 return {
//                     load: function ($q) {
//                         var deferred = $q.defer(),
//                             map = arrayName.map(function (name) {
//                                 return loadScript('/activities/' + name + ".js");
//                             });

//                         $q.all(map).then(function (r) {
//                             deferred.resolve();
//                         });

//                         return deferred.promise;
//                     }
//                 };
//             }

//             $routeProvider
//                 .when('/activities/CheckinEvent', {
//                     templateUrl: '/activities/checkin-event/checkin-event.component.html',
//                     controller: 'CheckinEventController',
//                     resolve: loader(['checkin-event/checkin-event.component'])
//                 })
//                 .when('/activities/DiscountWallet', {
//                     templateUrl: '/activities/discount-wallet/discount-wallet.component.html',
//                     controller: 'DiscountWalletController',
//                     resolve: loader(['discount-wallet/discount-wallet.component'])
//                 })
//                 .when('/activities/LuckyWheelManagement', {
//                     templateUrl: '/activities/lucky-wheel-management/lucky-wheel-management.component.html',
//                     controller: 'LuckyWheelManagementController',
//                     resolve: loader(['lucky-wheel-management/lucky-wheel-management.component'])
//                 })
//                 .when('/activities/MissionReward', {
//                     templateUrl: '/activities/mission-reward/mission-reward.component.html',
//                     controller: 'MissionRewardController',
//                     resolve: loader(['mission-reward/mission-reward.component'])
//                 })
//                 .when('/activities/NewLuckyWheel', {
//                     templateUrl: '/activities/new-lucky-wheel/new-lucky-wheel.component.html',
//                     controller: 'NewLuckyWheelController',
//                     resolve: loader(['new-lucky-wheel/new-lucky-wheel.component'])
//                 })
//                 .when('/activities/RedEnvelopeManagement', {
//                     templateUrl: '/activities/red-envelope-management/red-envelope-management.component.html',
//                     controller: 'RedEnvelopeManagementController',
//                     resolve: loader(['red-envelope-management/red-envelope-management.component'])
//                 })
//                 .otherwise('/activities');
//         }
//     ]);


